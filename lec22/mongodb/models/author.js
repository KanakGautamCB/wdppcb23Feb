import mongoose, {Schema} from "mongoose";

const authorSchema = new Schema({
    name: {type: String, required: true},
    agee: {type: Number},
    books: [{type: Schema.Types.ObjectId, ref: 'Book'}],    
});

export default mongoose.model('Author', authorSchema);