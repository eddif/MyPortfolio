﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace myprofile
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }


        //public static void RegisterRoutes(RouteCollection routes)
        //{
        //    routes.MapRoute("Default",
        //        "{controller}.mvc/{action}/{id}",
        //        new { controller = "Home", action = "Index", id = "" }
        //    );
        //}
    }
}
