import multer from "multer";


const upload = multer({
    storage : multer.memoryStorage(),  // File ko memory mein store karega, disk pe nahi
    limits : {  fileSize : 3 * 1024 * 1024}  // File size limit set kiya hai (3MB)

}
)

export default upload;