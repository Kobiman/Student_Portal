using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace SP.DAL
{
    public static class DataReader
    {
        public static ConcurrentBag<T> ReadData<T>(string table)
        {
            try { 
            string json = string.Empty;
            var applicationPath = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot/{table}.txt");
            if (!File.Exists(applicationPath))
            {
                using FileStream fs = File.Create(applicationPath);
            }

            
            using FileStream fileStream = new FileStream(applicationPath, FileMode.Open, FileAccess.Read);
            lock (fileStream)
            {
                using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
                {
                    json = "[" + streamReader.ReadToEnd() + "]";
                }

            }
            var data = JsonSerializer.Deserialize<IList<T>>(json, new JsonSerializerOptions { AllowTrailingCommas = true });
            var bag = new ConcurrentBag<T>();
            Parallel.ForEach(data, x => { bag.Add(x); });

              return bag ?? new ConcurrentBag<T>();
            }
            catch (Exception ex) { return new ConcurrentBag<T>(); }

        }
    }
}
