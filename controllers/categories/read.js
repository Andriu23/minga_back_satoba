import Category from "../../models/Category.js"

export default async(req, res) => {
    try {
         let all = await Category.find()
         if (all.length > 0) {
            return res.status(200).json({
                response: all, 
                success: true, 
                message: "you have requested GET /api/categories/"
            })
         } else {
            return res.status(404).json({
                response: null, 
                success: false, 
                message: "categories not found"
            })
         }
    } catch (error) {
        return res.status(500).json({
            response: null, 
            success: false, 
            message: error.message
        })
    }
}