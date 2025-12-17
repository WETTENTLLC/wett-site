// Client-side course progress tracking
export interface CourseProgress {
  courseId: string;
  lessonsCompleted: string[];
  quizScores: { [key: string]: number };
  certificateEarned: boolean;
  enrolledDate: string;
  completedDate?: string;
}

const PROGRESS_KEY = 'wett_course_progress';

export const courseService = {
  enrollInCourse: (courseId: string): void => {
    const progress = courseService.getProgress();
    if (!progress[courseId]) {
      progress[courseId] = {
        courseId,
        lessonsCompleted: [],
        quizScores: {},
        certificateEarned: false,
        enrolledDate: new Date().toISOString()
      };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }
  },

  completeLesson: (courseId: string, lessonId: string): void => {
    const progress = courseService.getProgress();
    if (progress[courseId] && !progress[courseId].lessonsCompleted.includes(lessonId)) {
      progress[courseId].lessonsCompleted.push(lessonId);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }
  },

  saveQuizScore: (courseId: string, quizId: string, score: number): void => {
    const progress = courseService.getProgress();
    if (progress[courseId]) {
      progress[courseId].quizScores[quizId] = score;
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }
  },

  awardCertificate: (courseId: string): void => {
    const progress = courseService.getProgress();
    if (progress[courseId]) {
      progress[courseId].certificateEarned = true;
      progress[courseId].completedDate = new Date().toISOString();
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }
  },

  getCourseProgress: (courseId: string): CourseProgress | null => {
    const progress = courseService.getProgress();
    return progress[courseId] || null;
  },

  getProgress: (): { [key: string]: CourseProgress } => {
    const data = localStorage.getItem(PROGRESS_KEY);
    return data ? JSON.parse(data) : {};
  },

  isLessonCompleted: (courseId: string, lessonId: string): boolean => {
    const progress = courseService.getCourseProgress(courseId);
    return progress ? progress.lessonsCompleted.includes(lessonId) : false;
  },

  getCompletionPercentage: (courseId: string, totalLessons: number): number => {
    const progress = courseService.getCourseProgress(courseId);
    if (!progress) return 0;
    return Math.round((progress.lessonsCompleted.length / totalLessons) * 100);
  }
};
