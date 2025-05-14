// FarmerController.cs
using Microsoft.AspNetCore.Mvc;

public class FarmerController : Controller
{
    public IActionResult Dashboard() // Farmer dahsboard
    {
        return View(); 
    }
    public IActionResult Add() // adding new farmer page
    {
        return View();
    }
}
