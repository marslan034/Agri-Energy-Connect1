// FarmerController.cs
using Microsoft.AspNetCore.Mvc;

public class FarmerController : Controller
{
    public IActionResult Dashboard()
    {
        return View();
    }
}
