// import { Post } from "../models/ProductModel";

import { Product } from "../models/ProductModel.js";


const postLikes = async (req, res) => {
    console.log("req.body", req.body);
    const { postId } = req.params;
    // console.log("🚀 ~ file: likeController.js:7 ~ likes ~ postId:", postId)

    const findPost = await Product.findById(postId);

    if (!findPost) {
        return res.status(400).json({ message: "Post does not found" });
    }

    const userId = req.user._id;

    if (findPost.likes.includes(userId)) {

        await findPost.updateOne({ $pull: { likes: userId } });

        const getDisLikesPost = await Product.findById(postId);

        res.status(200).json({
            success: true,
            message: "Disliked successfully",
            likeCount: getDisLikesPost?.likes.length,
            post: getDisLikesPost,
        });

    } else {
        await findPost.updateOne(
            {
                $push: { likes: userId },
            },
            { new: true }
        );

        const getLikesPost = await Product.findById(postId);
        res.status(200).json({
            success: true,
            message: "Liked successfully",
            likeCount: getLikesPost?.likes.length,
            post: getLikesPost,
        });
    }
};

export default postLikes;