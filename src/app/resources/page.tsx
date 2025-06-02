import Resource from "../../components/cards/resource";

export default function resources() {
  return (
    <div className="flex flex-col w-full mt-20">
      <div className="flex flex-col justify-between items-start w-full  px-6 sm:px-12 md:px-24 lg:px-36 my-8">
        <h3>Resources</h3>
        <p className="w-full md:w-1/3">
          Check out free resources to enhance your content e-books, whitepapers,
          webinars, or other downloadable resources
        </p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center  w-full gap-8 px-6 sm:px-12 md:px-24 lg:px-36">
        <Resource pic="/images/firstresource.png" />
        <Resource pic="/images/2ndresource.png" />
        <Resource pic="/images/3rdresource.png" />
        <Resource pic="/images/firstresource.png" />
        <Resource pic="/images/2ndresource.png" />
      </section>
    </div>
  );
}
