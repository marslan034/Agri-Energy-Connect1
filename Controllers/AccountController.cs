using Microsoft.AspNetCore.Mvc;

namespace AgriEnergyConnectWebApp.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Login() // login page
        {
            return View();
        }

        public IActionResult Register() // register page
        {
            return View();
        }
    }
}
