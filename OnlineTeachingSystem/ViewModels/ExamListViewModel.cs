﻿using OnlineTeachingSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OnlineTeachingSystem.ViewModels
{
    public class ExamListViewModel : BaseViewModel
    {
        public List<ExamList> ShowExamList { get; set; }
    }
}