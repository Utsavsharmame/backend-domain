  import mongooose,{Schema} from "mongoose";
  import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

  const videoSchema = new Schema({
    videoFile: {
      type: String,
      required: [true, 'Video file is required'],
      trim: true
    },
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail is required'],
      trim: true
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: 100
    },
    description: {
       type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    duration: {
      type: Number,
      required: [true, 'Duration is required'],
      min: 0
    },
    views: {
      type: Number,
      default: 0,
      min: 0
    },
    isPublished: {
      type: Boolean,
      default: true
    },
    owner:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Owner is required']
    }




  },{
    timestamps: true
  }
);
 videoSchema.plugin(mongooseAggregatePaginate);
 
  

  export const Video = mongoose.model("Video", videoSchema)