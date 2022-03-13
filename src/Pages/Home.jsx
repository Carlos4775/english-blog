import React from "react";
import MainLayout from "../Layout/MainLayout";
import compras from "../img/compras.jpg";
import Pagination from "../Components/Pagination";

const Home = () => {
  return (
    <MainLayout>
      <div className="relative bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                  <span className="block xl:inline">Technology Vlog</span>{" "}
                  <span className="block text-blue-600 xl:inline">
                    Carlos Torres
                  </span>
                  <br />
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  I'm a software enginnering student web developer. Passionate
                  for Open Source Technology and Web Design
                </p>
              </div>
            </main>
          </div>
        </div>

        <div class="container mx-auto card-deck">
          <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
            <div class="col card">
              <a
                href="https://reactjsexample.com/beautiful-way-to-fetch-data-in-react/"
                target="_blank"
              >
                <img
                  class="card-img-top pt-3"
                  src="https://estudioalfa.com/wp-content/uploads/2019/07/usar-react-native-crear-app.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title font-bold">
                    Beautiful way to fetch data in React
                  </h5>
                  <p class="card-text">
                    FetchX is a fetching library made for React built with axios
                    and mobx that give you an easy way to handle CRUD of
                    entities.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </a>
            </div>
            <div class="col card">
              <a
                href="https://itnext.io/react-project-architecture-641da390ebe7"
                target="_blank"
              >
                <img
                  class="card-img-top pt-3"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCWw-VHV-wqIzmIUGNO1pBRgAThDw4oumKw&usqp=CAU"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title font-bold">Project Arquitecture</h5>
                  <p class="card-text">
                    In this article I wanted to talk about how can you create
                    project structure and architecture with React. You can think
                    of it as a mix of best practices and React basics.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </a>
            </div>
            <div class="col card">
              <a
                href="https://medium.com/ballerina-techblog/ballerina-collections-tables-f4a0711085f7?source=rss----b380ce8c8855---4"
                target="_blank"
              >
                <img
                  class="card-img-top pt-3"
                  src="http://engranedigital.com/wp-content/uploads/2019/08/blogs-1-1080x675.jpg"
                  alt="Card image cap"
                />
                <div class="card-body" />
                <h5 class="card-title font-bold">
                  Ballerina Collections: Tables
                </h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </a>
            </div>
            <div class="col card">
              <a
                href="https://www.sarasoueidan.com/blog/prefers-color-scheme-browser-vs-os/"
                target="_blank"
              >
                <img
                  class="card-img-top pt-3"
                  src="https://i.blogs.es/b2d165/10481690626_8c28740067_k/500_333.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title font-bold">
                    The CSS prefers-color-scheme user query and order of
                    preference
                  </h5>
                  <p class="card-text">
                    I was reading Scott O’Hara’s article about using JavaScript
                    to detect high contrast and dark modes.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </a>
            </div>
            <div class="col card">
              <a
                href="https://blog.jetbrains.com/blog/2022/03/11/jetbrains-statement-on-ukraine/"
                target="_blank"
              >
                <img
                  class="card-img-top pt-3"
                  src="https://img.freepik.com/vector-gratis/ilustracion-vector-alarmas-recordatorio-tiempo-programa-aplicaciones-moviles-planificar-notificaciones-programar-timbres-trabajadoras-trabajadores-disenado-sitio-web-web-pagina-destino-aplicaciones-ui-ux-poster-folleto_4968-1380.jpg?size=626&ext=jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title font-bold">
                    JetBrains'statement on Ukraine
                  </h5>
                  <p class="card-text">
                    We have already made our position very clear in regard to
                    the invasion of Ukraine. We condemn the attacks of the
                    Russian government, and we stand with the Ukrainian people,
                    including our own colleagues and their families.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </a>
            </div>
            <div class="col card">
              <a
                href="https://betterprogramming.pub/what-i-learned-after-interviewing-100-software-engineers-35e0454dcf4b"
                target="_blank"
              >
                <img
                  class="card-img-top pt-3"
                  src="https://miro.medium.com/max/1400/1*nqegnt353_TyRD33i1RoTw.jpeg"
                  alt="Card image cap"
                />
                <div class="card-body" />
                <h5 class="card-title font-bold">
                  What I Learned After Interviewing More Than 100 Software
                  Engineers
                </h5>
                <p class="card-text">
                  Each software company has a unique interview process. A
                  candidate may struggle in one and thrive in another. It’s
                  normal.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </a>
            </div>
            <div class="col card">
              <a
                href="https://postsrc.com/posts/free-tailwind-css-components"
                target="_blank"
              >
                <img
                  class="card-img-top pt-3"
                  src="https://repository-images.githubusercontent.com/353474815/a1c45280-99f4-11eb-8966-5f58bb7a6f90"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title font-bold">Free Tailwind Components</h5>
                  <p class="card-text">
                    Get a free Tailwind CSS components for your project and save
                    some time from build components from the ground up.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </a>
            </div>
            <div class="col card">
              <a
                href="https://faun.pub/mongodb-com-50d2f3016c2b?gi=d755c0ea4b66"
                target="_blank"
              >
                <img
                  class="card-img-top pt-3"
                  src="https://somospnt.com/images/blog/cover/mongo_db_y_node_js.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title font-bold">MongoDB - Complete Guide</h5>
                  <p class="card-text">
                    MongoDB is a source-available cross-platform
                    document-oriented database program.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </a>
            </div>
            <div class="col card">
              <a
                href="https://software.rajivprab.com/2021/12/26/my-path-to-financial-independence-as-a-software-engineer/"
                target="_blank"
              >
                <img
                  class="card-img-top pt-3"
                  src="https://atlasti.com/wp-content/themes/atlasti/vue/img/mac9.85b94f66.png"
                  alt="Card image cap"
                />
                <div class="card-body" />
                <h5 class="card-title font-bold">
                  My Path to Financial Independence as a Software Engineer
                </h5>
                <p class="card-text">
                  One of the watershed moments of my life was as a 20 year old
                  intern attending a workplace presentation about personal
                  finance.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </a>
            </div>
          </div>

          <div className="my-5 pb-3">
            <Pagination />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
