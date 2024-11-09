import { del, get, post, postFile, postForm } from "./api_helper"


export const verifyGoogleUser = data => post('/user/verify-google-user', data)

export const fetchUser = data => post('/user/verify', data)

export const postLogin = data => post('/user/login', data)
export const postSignup = data => post('/user/register', data)
export const signupOtpVerify = data => post('/user/signup-otp-verify', data)
export const signupResendOtp = data => post('/user/signup-resend-otp', data)

export const fetchUsers = data => get('/user/list', data)
export const postUser = data => post('/user/update', data)
export const updateUserByAdmin = data => post('/user/update-by-admin', data)

export const deleteUserAPI = data => del('/user', data)


export const fetchProfile = data => get('/user/verify', data)
export const fetchSubscriber = data => get('/subscriber', data)
export const postSubscribe = data => post('/subscriber/subscribe', data)
export const postUnSubscribe = data => post('/subscriber/unsubscribe', data)
export const PasswordResetByOtp = data => post('/user/password-reset-by-otp', data)
export const PasswordResetByOtpToken = data => post('/user/password-reset-by-token', data)
export const PasswordReset = data => post('/user/verify-reset-otp', data)
export const PasswordResetEmail = data => post('/user/send-reset-otp', data)
export const passwordUpdate = data => post('/user/password-reset-by-token', data)
export const userProfileUpdate = data => post('/user/update', data)

export const removeFile = data => post('/file/remove-aws', data)
export const uploadSingleFile = data => postForm('/file/single-image-aws', data)
export const uploadMultipleFile = data => postForm('/file/multiple-image-aws', data)
export const sendMultipleFile = data => post('/file/multiple-image-aws', data)

export const fetchSiteSettings = data => get('/settings/site', data)
export const getCategoryData = data => get('/category/categories', data)
export const getAllCategoryData = data => get('/category/all', data)
export const getCategoryDataSub = data => get('/category/treecategory', data)
export const getSigleCategory = data => get('/category', data)
export const postComments = data => post('/comments', data)
export const fetchComments = data => get('/comments', data)
export const delComment = data => del('/comments', data)
export const fetchCommentsListByAdmin = data => get('/comments/list', data)
export const getTags = data => get('/tag/tags', data)
export const getAllTags = data => get('/tag/all', data)

export const postCommentReply = (data) => post("/comment-reply", data);
export const fetchCommentReplyByAdmin = (data) => get("/comment-reply/list", data);
export const delCommentReply = (data) => del("/comment-reply", data);


export const fetchSubCategoriesByCategory = data => get('/subcategory/subcategories', data)
export const fetchAllSubCategoriesByCategory = data => get('/subcategory/all', data)
export const fetchSubCategory = data => get('/subcategory', data)
export const addSubCategories = data => post('/subcategory', data)
export const delSubCategories = data => del('/subcategory', data)


export const fetchCategories = data => get('/category/categories', data)
export const fetchBlogAll = data => get('/blog/all', data)
export const fetchAllVideoBlog = data => get('/blog/all-video', data)
export const postCategory = data => post('/category', data)
export const deleteCategory = data => del('/category', data)
export const deletePost = data => del('/blog', data)

export const postStoryTopic = data => post('/story/topic', data)
export const fetchStoryTopic = data => get('/story/topic', data)
export const fetchAllStoryTopic = data => get('/story/topic/for-frontend', data)
export const fetchStoryElement = data => get('/story/topic/element', data)
export const deleteStoryTopic = data => del('/story/topic', data)

export const postStory = data => post('/story', data)
export const fetchAllStory = data => get('/story/all', data)
export const fetchStoryForFrontend = data => get('/story/for-frontend', data)
export const fetchStory = data => get('/story', data)
export const deleteStory = data => del('/story', data)


export const fetchTags = data => get('/tag/tags', data)
export const deleteTag = data => del('/tag', data)
export const postTag = data => post('/tag', data)

export const fetchContact = data => get('/contact-us', data)
export const deleteContact = data => del('/contact-us', data)

export const replyContactSms = data => post('/contact-us/msg-reply', data)

export const fetchAdminSettings = data => get('/settings', data)
export const postAdminSettings = data => post('/settings', data)
export const contactUs = data => post('/contact-us', data)
export const blogPublish = data => post('/blog/publish', data)
export const singleBlogDetails = data => get('/blog/details', data)


export const AddBlog = data => post('/blog', data)
export const blogPublished = data => get('/blog/published', data)
export const fetchPublishedForFrontend = data => get('/blog/published-frontend', data)
export const latestBlog = data => get('/blog/latest', data)
export const getSingleBlog = data => get('/blog/details', data)


export const fetchEdChoice = data => get('/blog/editors-choice', data)

export const getDashboardFront = data => get('/dashboard/dashboard-frontend', data)

export const fetchCtwData = data => get('/blog/for-frontend', data)
export const fetchVideo = data => get('/blog/featured-video', data)

export const fetchAllLanguages = data => get('/language/all', data)
export const postLanguage = data => post('/language', data)
export const delLanguage = data => del('/language', data)

export const fetchTranslations = data => get('/language/translations', data)
export const postTranslations = data => post('/language/translations', data)

export const fetchImages = data => get('/gallery/images', data)
export const postImages = data => post('/gallery/image', data)
export const delImage = data => del('/gallery/image', data)


//HRM module

// department
export const postDepartment = data => post('/department', data);
export const fetchDepartmentList = data => get('/department/list', data);
export const fetchDepartmentShortList = data => get('/department/elements', data);
export const fetchDepartment = data => get('/department', data);
export const delDepartment = data => del('/department', data);

// role permissions api

export const postEmployee = data => post('/user/employee-create', data);
export const fetchEmployee = data => get('/user/employee-list', data);
export const fetchEmployeeDepartment = data => get('/user/employee/roles', data);

export const postPermissions = data => post('/role/permissions', data);
export const fetchPermissions = data => get('/role/permissions', data);

export const fetchRoles = data => get('/role/list', data);
export const fetchDepartmentOrCategoryWise = data => get('/role/department-wise-list', data);
export const fetchRole = data => get('/role', data);
export const postRole = data => post('/role', data);
export const delRole = data => del('/role', data);



// fetch question ==============================
export const fetchForumQuestions = data => get('/question', data);
export const fetchQuestionDetails = data => get('/question/details', data);
export const postQuestion = data => post('/question', data);

// fetch answer ==============================
export const fetchAnswers = data => get('/answer', data);
export const FetchAnswerDetails = data => get('/answer/details', data);
export const postAnswer = data => post('/answer', data);
export const delAnswer = data => del('/answer', data);

export const upVoteQuestion = data => post('question/upvote', data);
export const DownVoteQuestion = data => post('/question/downvote', data);
export const upVoteAnswer = data => post('/answer/upvote', data);
export const downVoteAnswer = data => post('/answer/downvote', data);
export const delQuestion = data => del('/question', data);

//fetch comments of answer
export const fetchAnswerComments = data => get('/comments/answer', data);
export const postAnswerComments = data => post('/comments/answer', data);
export const delAnswerComments = data => del('/comments/answer', data);
export const postCommentReplyAnswer = data => post("/comment-reply/answer", data);
export const fetchCommentReply = data => get("/comment-reply", data);


// fetch poll
export const fetchPoll = data => get("/poll", data);
export const postPoll = data => post("/poll", data);
export const delPoll = data => del("/poll", data);
export const postPollVote = data => post("/poll/vote", data);
export const postQuesPollVote = data => post("/question/vote", data);
