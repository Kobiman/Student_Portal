using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace SP.DAL
{
    public static class DataWriter
    {
        public static void WriterData<T>(T data, string fileName)
        {
            new Thread(() =>
            {
                try
                {
                    Thread.CurrentThread.IsBackground = true;
                    var applicationPath = PathSetup(fileName);

                    lock (applicationPath) {                        
                        using var sw = new StreamWriter(applicationPath, true);
                        var json = new StringBuilder();
                        json.Append(JsonSerializer.Serialize(data)).Append(',');
                        sw.WriteLine(json);
                    }
                }
                catch (Exception ex)
                {
                }
            }).Start();
        }

        public static void WriterData<T>(IEnumerable<T> data, string fileName)
        {
            new Thread(() =>
            {
                try
                {
                    Thread.CurrentThread.IsBackground = true;
                    var applicationPath = PathSetup(fileName);
                    lock (applicationPath)
                    {
                        using (var sw = new StreamWriter(applicationPath, true))
                        {
                            var json = new StringBuilder();
                            foreach(var d in data)
                            {
                                json.Append(JsonSerializer.Serialize(d)).Append(',');
                            }
                            sw.WriteLine(json);
                        }
                    }
                }
                catch (Exception ex)
                {
                }
            }).Start();
        }

        public static void Delete()
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            if (Directory.Exists(path))
            {
                try 
                {
                    var di = new DirectoryInfo(path);
                    foreach (FileInfo file in di.GetFiles())
                    {
                        file.Delete();
                    }
                } 
                catch(Exception ex) 
                {
                }
                
            }
        }

        private static string PathSetup(string fileName)
        {
            var directoryName = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            var path = Path.Combine(directoryName, $"{fileName}.txt");

            if (!Directory.Exists(directoryName))
                Directory.CreateDirectory(directoryName);

            if (!File.Exists(path)) { File.Create(path); }

            return path;
        }

    }
}
