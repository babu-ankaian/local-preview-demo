import Head from "next/head";
import _ from "lodash";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts, getProducts } from "../../util/api";
import MorePosts from "../../components/morePosts";
import CoverImage from "../../components/coverImage";
import PostBody from "../../components/Post/postBody";
import PostHeader from "../../components/Post/postHeader";
import PostAuthor from "../../components/Post/postAuthor";
import dayjs from "dayjs";
let advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

const Post = (props) => {
  const post = _.get(props, "post[0].fields");
  const preview = _.get(props, "preview");
  const morePosts = _.get(props, "morePosts");

  const title = _.get(post, "title");
  const slug = _.get(post, "slug");
  const externalUrl = _.get(post, "externalUrl");
  const author = _.get(post, "author.fields.name");
  const authorImage = _.get(post, "author.fields.picture.fields.file.url");
  const coverImage = _.get(post, "coverImage.fields.file.url");
  const content = _.get(post, "content");
  const date = _.get(post, "date");
  let postDate = dayjs(date).format(" dddd Do MMMM, YYYY");

  console.log(props)

  return (
    <div>
      <Layout preview={preview}>
        <h1>This is Product page body section</h1>

        <div className="px-40"></div>
      </Layout>

      <div className=""></div>
    </div>
  );
};

export async function getServerSideProps({ params, preview = false }) {
  const data = await getProducts('johnsons-baby-powder-660g', preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export default Post;
