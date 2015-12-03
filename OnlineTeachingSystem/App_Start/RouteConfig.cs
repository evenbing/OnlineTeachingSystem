﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace OnlineTeachingSystem
{
    public class RouteConfig
    {
        protected void Application_Start()
        {
            RegisterRoutes(RouteTable.Routes);
        }
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            /* Code by Dwayne 2015-12-3 17:19:56 */
            routes.MapRoute(
                name: "Article",
                url: "article/{id}",
                defaults: new { controller = "article", action = "Index", id = 1 },
                constraints: new {id = @"\d+" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
