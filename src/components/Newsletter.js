export default function Newsletter() {
  return (
    <div className=" bg-bgLight ">
      <section className=" text-gray-800 text-center lg:text-left">
        <div className="block rounded-lg shadow-lg bg-bgLight">
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto hidden lg:flex lg:w-6/12 xl:w-4/12">
              <img
                src="https://images.unsplash.com/photo-1601074231509-dce351c05199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt="Trendy Pants and Shoes"
                className="w-full "
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-3xl font-bold mb-6">
                  Do not miss any updates.
                  <br />
                  <span className="text-accent">
                    Subscribe to the newsletter
                  </span>
                </h2>
                <p className="text-gray-500 mb-12 font-text">
                  Be the first to find out about your future home.
                </p>
                <div className="md:flex flex-row">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-accent focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-accent text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-bgDark hover:shadow-lg focus:bg-accent focus:shadow-lg focus:outline-none focus:ring-0 active:bg-accent active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
