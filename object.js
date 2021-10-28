//object
let course={
    lecture:10,
    section:3,
    title:'javascript',
    notes:{
        introduction:"Welcome to JS Course "
    },
    enroll()
    {
        console.log("You have successfully enrolled ");
    }

}
console.log(course);
course.enroll();

//Factory Function

function createCourse(title)
{
  return 
  {
    title:title,
    enroll()
    {
        console.log("You have successfully enrolled ");
    }
  }
}
const courseobj=createCourse('cpp');
console.log(courseobj);

//constructor function

function Courses(title)
{
    this.title=title,
    this.enroll=function()
    {
        console.log("You have successfully enrolled ");
    }
}
const newcourse=new Courses("JAVA");
console.log(newcourse);
delete newcourse.title;
console.log("After delete ",newcourse);
newcourse.checkEnrollment=function()
{
    console.log("30 users are enrolled ");
}
console.log(newcourse);
newcourse.checkEnrollment();
// constructor function

const newcourse_1=new Function('title', `
this.title=title,
this.enroll=function()
{
    console.log("You have successfully enrolled ");
}
`)
const course2=new newcourse_1('Javascript');
course2.enroll();
//copy
//const course_3={...newcourse_1};

const course_copy=Object.assign({},newcourse);
console.log(course_copy);
course_copy.checkEnrollment();
course_copy.enroll();

