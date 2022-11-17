<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $table = 'Subject';
    
    protected $fillable = [
        'SubjectID',
        'SubjectName',
        'SubjectTime',
        'TeacherSubjectUserName',
        'ClassID',
        'DateOfWeek',
    ];
}
