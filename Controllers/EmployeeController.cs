// EmployeeController.cs
using Microsoft.AspNetCore.Mvc;

public class EmployeeController : Controller
{
    public IActionResult Dashboard() // Employee Dashboard
    {
        return View();
    }
}