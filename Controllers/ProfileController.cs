using Microsoft.AspNetCore.Mvc;

namespace Agri_Energy_Connect1.Controllers
{
    public class ProfileController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
