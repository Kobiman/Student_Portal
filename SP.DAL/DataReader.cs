using CsvHelper;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace SP.DAL
{
    public static class DataReader
    {
        //public static ConcurrentBag<T> ReadData<T>(string table)
        //{
        //    try
        //    {
        //        string json = string.Empty;
        //        var applicationPath = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot/{table}.txt");
        //        if (!File.Exists(applicationPath))
        //        {
        //            using FileStream fs = File.Create(applicationPath);
        //        }


        //        using FileStream fileStream = new FileStream(applicationPath, FileMode.Open, FileAccess.Read);
        //        lock (fileStream)
        //        {
        //            using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
        //            {
        //                json = "[" + streamReader.ReadToEnd() + "]";
        //            }

        //        }
        //        var data = JsonSerializer.Deserialize<IList<T>>(json, new JsonSerializerOptions { AllowTrailingCommas = true });
        //        var bag = new ConcurrentBag<T>();
        //        Parallel.ForEach(data, x => { bag.Add(x); });

        //        return bag ?? new ConcurrentBag<T>();
        //    }
        //    catch (Exception ex) { return new ConcurrentBag<T>(); }
        //}

        public static IEnumerable<T> ReadCsv<T>(string table) where T : new()
        {
            var applicationPath = Path.Combine(WebRoot.WWWRoot, $"Data/{table}.csv");
            if (!File.Exists(applicationPath))
            {
                yield return new T();
            }
            else
            {
                var fileName = Path.Combine(WebRoot.WWWRoot, $"Data/{table}.csv");
                using var reader = new StreamReader(fileName);
                using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
                foreach (var r in csv.GetRecords<T>()) { yield return r; }
            }
        }

        public static IEnumerable<T> Distinct<T>(this IEnumerable<T> arr, Func<T, dynamic> predicate1, Func<T, dynamic> predicate2)
        {
            var uniqueProducts = new ConcurrentBag<T>();
            Parallel.ForEach(arr.GroupBy(predicate1), p =>
            {
                uniqueProducts.Add(p.OrderByDescending(predicate2).First());
            });
            return uniqueProducts;
        }

        public static IList<T> Include<T, U>(this IList<T> users, IEnumerable<U> issues, Expression<Func<T, IEnumerable<U>>> predicate, Func<T, U, bool> predicate2) where U : class
        {
            var expression = (MemberExpression)predicate.Body;
            Parallel.ForEach(users, (u) =>
            {
                foreach (var property in u.GetType().GetProperties())
                {
                    if (property.Name == expression.Member.Name && property.CanWrite)
                    {
                        property.SetValue(u, issues.Where(x => predicate2.Invoke(u, x)).ToList(), null);
                    }
                }
            });
            return users;
        }

        public static (T Value, int Index, bool success) Find<T>(this T[] arr, Func<T, int, bool> predicate2)
        {
            (T Value, int Index, bool Success) result = (Value: default(T), Index: 0, Success: false);
            Parallel.ForEach(arr, (user, state) =>
            {
                if (user != null)
                {
                    for (var i = 0; i < ((dynamic)user).Count; i++)
                    {
                        if (predicate2(user, i))
                        {
                            result = (Value: user, Index: i, Success: true);
                            state.Break();
                            break;
                        }
                    }
                }
            });
            return result;
        }

        public static (T Value, int Index, bool success) Find<T>(this Memory<T> arr, Func<T, int, bool> predicate2)
        {
            (T Value, int Index, bool Success) result = (Value: default(T), Index: 0, Success: false);
            for (var i = 0; i < arr.Span.Length; i++)
            {
                if (arr.Span[i] != null)
                {
                    for (var j = 0; j < ((dynamic)arr.Span[i]).Count; j++)
                    {
                        if (predicate2(arr.Span[i], j))
                        {
                            result = (Value: arr.Span[i], Index: j, Success: true);
                            break;
                        }
                    }
                }
            }
            return result;
        }

        public static (T Value, int Index, bool success) Find<T, U>(this U[] arr, Func<U, T[]> predicate, Func<T, int, bool> predicate2)
        {
            (T Value, int Index, bool Success) result = (Value: default(T), Index: 0, Success: false);
            Parallel.ForEach(arr, (user, state) =>
            {
                if (user != null)
                {
                    for (var i = 0; i < ((dynamic)user).Count; i++)
                    {
                        var val1 = (dynamic)predicate(user)[i];
                        for (var j = 0; j < val1.Count; j++)
                        {
                            if (predicate2(val1, j))
                            {
                                result = (Value: val1, Index: j, Success: true);
                                state.Break();
                                break;
                            }
                        }
                    }
                }
            });
            return result;
        }

        public static IEnumerable<T> Select<T, U>(this U[] arr, Func<U, int, T> predicate)
        {
            List<T> result = new List<T>();
            Parallel.ForEach(arr, (user) =>
            {
                if (user != null)
                {
                    for (var i = 0; i < ((dynamic)user).Count; i++)
                    {
                        result.Add(predicate(user, i));
                    }
                }
            });
            return result;
        }

        public static IEnumerable<T> Select<T, U>(this Memory<U> arr, Func<U, int, T> predicate)
        {
            for (var p = 0; p < arr.Length; p++)
            {
                if (arr.Span[p] != null)
                {
                    for (var i = 0; i < ((dynamic)arr.Span[p]).Count; i++)
                    {
                       yield return predicate(arr.Span[p], i);
                    }
                }
            }
        }

        public static IEnumerable<T> Select<T, U>(this U[] arr, Func<U, int, bool> predicate, Func<U, int, T> predicate2)
        {
            List<T> result = new List<T>();
            Parallel.ForEach(arr, (user) =>
            {
                if (user != null)
                {
                    for (var i = 0; i < ((dynamic)user).Count; i++)
                    {
                        if (predicate.Invoke(user, i))
                        {
                            result.Add(predicate2(user, i));
                        }
                    }
                }
            });
            return result;
        }
        public static IEnumerable<T> Select<T, U>(this Memory<U> arr, Func<U, int, bool> predicate, Func<U, int, T> predicate2)
        {
            for(var p = 0; p < arr.Length; p++)
            {
                if (arr.Span[p] != null)
                {
                    for (var i = 0; i < ((dynamic)arr.Span[p]).Count; i++)
                    {
                        if (predicate.Invoke(arr.Span[p], i))
                        {
                            yield return predicate2(arr.Span[p], i);
                        }
                    }
                }
            }
        }

        public static IEnumerable<T> SelectMany<T, U, V>(this U[] arr, Func<U, V[]> predicate, Func<V, int, bool> predicate2, Func<U, int, int, T> predicate3)
        {
            List<T> result = new List<T>();
            Parallel.ForEach(arr, (user) =>
            {
                if (user != null)
                {
                    for (var i = 0; i < ((dynamic)user).Count; i++)
                    {
                        var val1 = predicate(user)[i];
                        for (var j = 0; j < ((dynamic)val1).Count; j++)
                        {
                            if (predicate2(val1, j))
                            {
                                result.Add(predicate3(user, i, j));
                            }
                        }
                    }
                }
            });
            return result;
        }

        public static IEnumerable<T> SelectMany<T, U, V>(this U[] arr, Func<U, V[]> predicate, Func<U, int, int, T> predicate3)
        {
            List<T> result = new List<T>();
            Parallel.ForEach(arr, (user) =>
            {
                if (user != null)
                {
                    for (var i = 0; i < ((dynamic)user).Count; i++)
                    {
                        var val1 = predicate(user)[i];
                        for (var j = 0; j < ((dynamic)val1).Count; j++)
                        {
                            result.Add(predicate3(user, i, j));
                        }
                    }
                }
            });
            return result;
        }

        public static IEnumerable<T> SelectMany<T, U, V>(this U[] arr, Func<U, V[]> predicate, Func<V, int, bool> predicate2, Func<V, int, T> predicate3)
        {
            List<T> result = new List<T>();
            Parallel.ForEach(arr, (user) =>
            {
                if (user != null)
                {
                    for (var i = 0; i < ((dynamic)user).Count; i++)
                    {
                        var val1 = predicate(user)[i];
                        for (var j = 0; j < ((dynamic)val1).Count; j++)
                        {
                            if (predicate2(val1, j))
                            {
                                result.Add(predicate3(val1, j));
                            }
                        }
                    }
                }
            });
            return result;
        }

        public static IEnumerable<T> SelectMany<T, U, V>(this U[] arr, Func<U, V[]> predicate, Func<V, int, T> predicate3)
        {
            List<T> result = new List<T>();
            Parallel.ForEach(arr, (user) =>
            {
                if (user != null)
                {
                    for (var i = 0; i < ((dynamic)user).Count; i++)
                    {
                        var val1 = predicate(user)[i];
                        for (var j = 0; j < ((dynamic)val1).Count; j++)
                        {
                            result.Add(predicate3(val1, j));
                        }
                    }
                }
            });
            return result;
        }

        public static IEnumerable<T> Select<T, U>(this U arr, Func<U, int, T> predicate)
        {
            var result = new List<T>();
            for (int i = 0; i < ((dynamic)arr)?.Count; i++)
            {
                result.Add(predicate.Invoke(arr, i));
            }
            return result;
        }

        private static PropertyInfo GetPropertyValue<T>(T type, string propName)
        {
            foreach (var property in type.GetType().GetProperties())
            {
                if (property.Name == propName)
                {
                    return property;
                }
            }
            return default;
        }

    }
}
