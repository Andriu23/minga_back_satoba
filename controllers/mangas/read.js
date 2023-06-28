import Manga from "../../models/Manga.js"

export default async(req, res) => {
    try {
         let all = await Manga.find()
         if (all.length > 0) {
            return res.status(200).json({
                response: all, 
                success: true, 
                message: "you have requested GET /api/mangas/"
            })
         } else {
            return res.status(404).json({
                response: null, 
                success: false, 
                message: "mangas not found"
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