import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TeacherHome from '@/views/teacher/home'
import StudentHome from '@/views/student/home'
import ExamTable from '@/components/ExamTable'
import CreateCourse from '@/components/CreateCourse'
import CreateExam from '@/components/CreateExam'
import StudentList from '@/components/StudentList'
import ExamPaper from '@/components/ExamPaper'
import AnswerGather from '@/components/AnswerGather'
import VerifyHome from '@/views/verify/home'
import Register from '@/views/verify/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/teacher/:teacher_id',
      name: 'TeacherHome',
      component: TeacherHome,
      children: [
        {
          path: '/course/create',
          name: 'CreateTable',
          component: CreateCourse
        },
        {
          path: '/course/:course_id',
          name: 'TestTable',
          component: ExamTable
        },
        {
          path: '/course/:course_id/exam/create',
          name: 'CreateExam',
          component: CreateExam
        },
        {
          path: '/course/:course_id/exam/:exam_id',
          name: 'StudentList',
          component: StudentList
        }
      ]
    },
    {
      path: '/student/:student_id',
      name: 'StudentHome',
      component: StudentHome,
      children: [
        {
          path: '/student/:student_id/exam/:exam_id/q/:q_id',
          name: 'ExamPaper',
          component: ExamPaper
        },
        {
          path: '/student/:student_id/exam/:exam_id/answers',
          name: 'AnswerPaper',
          component: AnswerGather
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: VerifyHome
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
