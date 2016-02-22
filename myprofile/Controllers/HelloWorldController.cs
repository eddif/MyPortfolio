using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace myprofile.Controllers
{
    //DEFAULT
    public class HelloWorldController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Welcome(string name, int numTimes = 1)
        {
            ViewBag.Message = "Hello " + name;
            ViewBag.NumTimes = numTimes;

            return View();

        }

    }

    //TEST

    



    //public class HelloWorldController : Controller
    //{
    //    // 
    //    // GET: /HelloWorld/ 

    //    public string Index()
    //    {
    //        return "This is my <b>default</b> action...";
    //    }

    //    // 
    //    // GET: /HelloWorld/Welcome/ 

    //    public string Welcome(string name, int ID = 1)
    //    {
    //        return HttpUtility.HtmlEncode("Hello " + name + ", ID: " + ID);
    //    }
    //}

}