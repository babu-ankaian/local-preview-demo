import Head from "next/head";
import Image from "next/image";
import _ from "lodash";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts, getPages } from "../../util/api";
import MorePosts from "../../components/morePosts";
import CoverImage from "../../components/coverImage";
import PostBody from "../../components/Post/postBody";
import PostHeader from "../../components/Post/postHeader";
import PostAuthor from "../../components/Post/postAuthor";
import dayjs from "dayjs";
let advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

const Post = (props) => {
  //console.log('hello');
  const post = _.get(props, "post[0].fields");
  console.log({props});
  const preview = _.get(props, "preview");
  const morePosts = _.get(props, "morePosts");
   //console.log("test");
  const title = _.get(post, "pageTitle");
  //console.log(title);
  const slug = _.get(post, "slug");
  const subTitle = _.get(post, "subTitle");
  const learnMore = _.get(post, "learnMore");
  const body0 = _.get(post, "body.content[0].content[0].value");
  const body1 = _.get(post, "body.content[1].content[0].value");
  const body2 = _.get(post, "body.content[2].content[0].value");
  const body3 = _.get(post, "body.content[3].content[0].value");
  // const author = _.get(post, "author.fields.name");
   const pageImage = _.get(post, "image.fields.file.url");
  // const coverImage = _.get(post, "coverImage.fields.file.url");
  // const content = _.get(post, "content");
  // const date = _.get(post, "date");
  // let postDate = dayjs(date).format(" dddd Do MMMM, YYYY");

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>
            {title}
          </title>
        </Head>

   <div className="flex flex-col mb-12 ">
      <h1 className="text-4xl whitespace-nowrap md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-center mt-4">
        {title}
      </h1>
      {/* <small className="text-center mt-4"> {date}</small> */}
    </div>
    {/* <p>{slug}</p> */}

    <div className="flex flex-col mb-12 ">
      <p className="text-2xl md:text-2xl md:leading-none text-center mt-4">
        {subTitle}
      </p>
      {/* <small className="text-center mt-4"> {date}</small> */}
    </div>



    {/* <p>{subTitle}</p> */}
    {/* <div className="flex flex-col mb-12 ">
    <p className="text-2xl md:text-3xl md:leading-none mt-1">{body0}</p>
    <p className="text-2xl md:text-3xl md:leading-none mt-1">{body1}</p>
    <p className="text-2xl md:text-3xl md:leading-none mt-1">{body2}</p>
    <p className="text-2xl md:text-3xl md:leading-none mt-1">{body3}</p>
    </div> */}

    <div class="">
        <div class="md:max-w-2xl mx-auto w-full overflow-scroll md:overflow-hidden">
            <div class="markdown-styles_markdown__h_8de">
            <p>{body0}</p>
            <p>{body1}</p>
            <p>{body2}</p>
            <p>{body3}</p>
        
            </div>
        </div>
    </div>

    <div className="flex flex-col">
      <p className="text-center">
        {learnMore}
      </p>
      {/* <small className="text-center mt-4"> {date}</small> */}
    </div>

    {/* <p>{pageImage}</p> */}

    
    <div class="md:max-w-2xl mx-auto w-full overflow-scroll md:overflow-hidden">
            <figure aria-label="Why Donate Blood?">
                <Image
                  src={`http:${pageImage}`}
                  className=""
                  alt={'page image'}
                  height={250}
                  width={600}
                  unoptimized={true}
                />
                {/* <img alt="Cover Image for Why Donate Blood?" loading="lazy" width="2000" height="1000" decoding="async" data-nimg="1" class="shadow hover:shadow-lg transition-all duration-75" 
                src="//images.ctfassets.net/y5mc1tp2v6n4/1Pgh9ZgL4bPQnE0CHtemGq/e49212c27855382f0b883c4cd9b39cd8/contentful-intro.png" style="color: transparent;"> */}
            </figure>
        </div>


    <div className="px-40"></div>
      </Layout>
      <div className=""></div>
    </div>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getPages(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: Array.isArray()
      ? allPosts?.map(({ slug }) => `/posts/${slug}`) ?? []
      : [],
    fallback: true,
  };
}

export default Post;
