import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Hero from "../../components/hero";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <Hero heroImage={imageUrl} textClass="has-text-white" title={article.title} subtitle={"By " + article.author.name}></Hero>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <article>
                <div class="content">
                  <ReactMarkdown source={article.content} escapeHtml={false} />
                </div>
              </article>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        {article.author.picture && (
                          <Image
                            image={article.author.picture}
                            style={{
                              position: "static",
                              borderRadius: "50%",
                              height: 48,
                              width: 48,
                            }}
                          />
                        )}
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{article.author.name}</p>
                    </div>
                    <div className="content">
                      <Moment format="MMM Do YYYY">
                        <time datetime="{article.published_at}">{article.published_at}</time>
                      </Moment>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
