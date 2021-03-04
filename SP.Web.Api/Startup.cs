using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using SP.Commands;
using SP.DAL;
using SP.Services;
using SP.Services.Interfaces;
using SP.Services.Interfaces.Commands;
using SP.Services.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP.Web.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddControllers();
            services.AddSingleton<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IStudentService, StudentService>();
            services.AddScoped<IInstitutionService, InstitutionService>();
            services.AddScoped<ISchoolService, SchoolService>();
            services.AddScoped<IDepartmentService, DepartmentService>();
            services.AddScoped<IProgramService, ProgramService>();
            services.AddScoped<ICourseService, CourseService>();
            services.AddScoped<ILookupService, LookupService>();
            services.AddScoped<ILecturerService, LecturerService>();
            services.AddSingleton<ICommandProcessor, CommandProcessor>();
            services.AddTransient<IAddMountedCourseCommand, AddMountedCourseCommand>();
            services.AddTransient<IAddRegisteredCoursesCommand, AddRegisteredCoursesCommand>();
            services.AddTransient<IGetRegisteredCoursesCommand, GetRegisteredCoursesCommand>();
            services.AddTransient<IGetMountedCoursesCommand, GetMountedCoursesCommand>();
            services.AddTransient<IGetSchoolByProgramCommand, GetSchoolByProgramCommand>();
            services.AddTransient<IGetDepartmentsWithCoursesCommand, GetDepartmentsWithCoursesCommand>();
            services.AddTransient<IGetMountedCoursesForRegistrationCommand, GetMountedCoursesForRegistrationCommand>();
            services.AddTransient<ICheckResultCommand, CheckResultCommand>();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SP.Web.Api", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SP.Web.Api v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(
              builder =>
              builder.AllowAnyOrigin()
              .AllowAnyHeader()
              );
            app.UseStaticFiles();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
