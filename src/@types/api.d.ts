
declare namespace API {

    namespace Register {
        type RequestBody = {
            account: string
            password: string
            userInfo: {}
        }
        type ResponseBody = {}
    }

    namespace Login {
        type RequestBody = {
            account: string
            password: string
        }
        type ResponseBody = {}
    }

    namespace View {
        namespace Post {
            type Query = {
                postId: string,
            }
            type ResponseBody = any
        }
        namespace Posts {
            type Query = {
                page: number
                userId: string
            }
            type ResponseBody = any
        }

        namespace Info {
            type Query = {
                userId: string
            }
            type ResponseBody = any
        }
    }

    namespace User {
        namespace Post {
            type RequestBody = {
                newBody: string,
            }
            type ResponseBody = any
        }
        namespace Follow {
            type RequestBody = {
                userId: string,
            }
            type ResponseBody = {}
        }
        namespace Like {
            type RequestBody = {
                userId: string,
            }
            type ResponseBody = {}
        }
        namespace Edit {
            type Params = {
                postId: string
            }
            type RequestBody = Post.RequestBody
            type ResponseBody = View.Post.ResponseBody
        }
    }
}
