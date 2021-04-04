
declare namespace API {
    type PostItem = {
        body: string
        lastUpdatedAt: Date
        publishedAt: Date
        account: string
    }
    namespace Register {
        type RequestBody = {
            account: string
            password: string
            userInfo: {}
        }
        type ResponseBody = {
            token?: string,
            err?: string
        }
    }

    namespace Login {
        type RequestBody = {
            account: string
            password: string
        }
        type ResponseBody = Register.ResponseBody
    }

    namespace View {
        namespace Post {
            type Params = {
                account: string
                postId: string,
            }
            type ResponseBody = { post?: PostItem, err?: string }
        }
        namespace Posts {
            type Query = {
                page: number
                userId: string
            }
            type ResponseBody = { posts?: PostItem[], err?: string }
        }

        namespace Info {
            type Query = {
                userId: string
            }
            type ResponseBody = any
        }
        namespace Timeline {
            type Params = {
                limit: number,
                page: number
            }
            type ResponseBody = Posts.ResponseBody
        }
    }

    namespace User {
        namespace Post {
            type RequestBody = {
                newBody: string,
            }
            type ResponseBody = { res?: Model.Post.Property, err?: string }
        }
        namespace Follow {
            type RequestBody = {
                userId: string,
            }
            type ResponseBody = {}
        }
        namespace Like {
            type RequestBody = {
                postId: string,
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
