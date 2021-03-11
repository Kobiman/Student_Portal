using Microsoft.Extensions.DependencyInjection;
using SP.Commands;
using SP.Common;
using SP.DAL;
using SP.Services;
using SP.Services.Interfaces;
using SP.Services.Interfaces.Commands;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace SP.TestInfrastructure
{
    public class TestBootStrapper
    {
        static ServiceCollection services;
        static ServiceProvider serviceProvider;
        static IServiceScope scope;
        
        public static void Setup()
        {
            services = new ServiceCollection();
            services.AddTransient<IStudentService, StudentService>(); 
            services.AddTransient<IDepartmentService, DepartmentService>();
            services.AddTransient<IAddStudentCommand, AddStudentCommand>();
            services.AddTransient<IProgramService, ProgramService>();
            services.AddTransient<IAddRegisteredCoursesCommand, AddRegisteredCoursesCommand>();
            services.AddTransient<IAddMountedCourseCommand, AddMountedCourseCommand>();
            services.AddTransient<IGetMountedCoursesCommand, GetMountedCoursesCommand>();
            services.AddTransient<IGetRegisteredCoursesCommand, GetRegisteredCoursesCommand>();
            services.AddTransient<IApproveRegistrationCommand, ApproveRegistrationCommand>();
            services.AddTransient<IGetMountedCoursesForRegistrationCommand, GetMountedCoursesForRegistrationCommand>();
            //services.AddTransient<ICommandProcessor, CommandProcessor>();
            services.AddSingleton<IUnitOfWork, UnitOfWork>(); 
            serviceProvider = services.BuildServiceProvider();
            scope = serviceProvider.GetRequiredService<IServiceScopeFactory>().CreateScope();
            //tt.SetService(scope);
        }

        public static T Resolve<T>()
        {
           return scope.ServiceProvider.GetService<T>();
        }

        public static void Dispose()
        {
            DataWriter.Delete();
        }
    }
}
