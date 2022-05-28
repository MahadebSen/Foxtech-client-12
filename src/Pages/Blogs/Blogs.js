import Footer from "../Footer/Footer";
import carbon from "../../images/carbon.png";

const Blogs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 mx-3 my-7">
        <div className="text-left border-2 rounded-xl px-4 py-3">
          <p className="font-semibold text-xl">
            <span>1.</span> How to improve the performance of a React
            application?
          </p>
          <p className="text-lg">
            <span className="font-semibold">Ans.</span> These are 5 steps to
            improve the performance of React app:
            <ul className="list-disc mx-5">
              <li>
                Use React.Fragment or, '<></>' to avoid adding extra nodes to
                the DOM.
              </li>
              <li>
                Use production build (npm run build) before deploying, which
                create a production ready file of your app in a build.
              </li>
              <li>
                Use React.Suspense and React.Lazy for lazy loading components.
              </li>
              <li>Use React.memo for component memorization.</li>
              <li>Virtualize a Large List Using react-window.</li>
            </ul>
          </p>
        </div>
        <div className="text-left border-2 rounded-xl px-4 py-3">
          <p className="font-semibold text-xl">
            <span>2.</span> What are the different ways to manage a state in a
            React application?
          </p>
          <p className="text-lg">
            <span className="font-semibold">Ans.</span> There are four main
            types of state you need to manage state in your React apps:
            <ul className="list-disc mx-5">
              <li>
                Local state : Local state is most often managed using the
                'useState()' hook in React.
              </li>
              <li>
                Global state: To manage global state, you can use tried and
                tested third-party libraries like 'Zustand', 'Jotai', and
                'Recoil'. Or, you can prefer Redux toolkit.
              </li>
              <li>
                Server state: To manage server state, you can use SWR and React
                Query.
              </li>
              <li>
                URL state: To manage URL state, React Router is the best option
                to manage.
              </li>
            </ul>
          </p>
        </div>
        <div className="text-left border-2 rounded-xl px-4 py-3">
          <p className="font-semibold text-xl">
            <span>3.</span> How does prototypal inheritance work?
          </p>
          <p className="text-lg">
            <span className="font-semibold">Ans.</span> The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the '[[Prototype]]' of an object, we use
            Object.getPrototypeOf and Object. setPrototypeOf. Nowadays, in
            modern language, it is being set using __proto__.
          </p>
        </div>
        <div className="text-left border-2 rounded-xl px-4 py-3">
          <p className="font-semibold text-xl">
            <span>4.</span> You have an array of products. Each product has a
            name, price, description, etc. How will you implement a search to
            find products by name?
          </p>
          <p className="text-lg">
            <span className="font-semibold">Ans.</span>
            <div className="md:mx-[120px] my-8 rounded-xl">
              <img
                className="rounded-xl w-[620px] md:w-[680px] lg:w-[710px] mx-auto"
                src={carbon}
                alt=""
              />
            </div>
          </p>
        </div>
        <div className="text-left border-2 rounded-xl px-4 py-3">
          <p className="font-semibold text-xl">
            <span>5.</span> What is a Unit test ? Why should write Unit tests?
          </p>
          <p className="text-lg">
            <span className="font-semibold">Ans.</span> Unit testing is a
            software development process in which the smallest testable parts of
            an application, called units, are individually and independently
            scrutinized for proper operation. This testing methodology is done
            during the development process by the software developers and
            sometimes QA staff. The main objective of unit testing is to isolate
            written code to test and determine if it works as intended.
          </p>
          <p>
            {" "}
            <span className="font-semibold"> #By unit testing,</span>
            <ul className="list-disc mx-5">
              <li>The earlier a problem is identified. </li>
              <li>Debugging processes are made easier. </li>
              <li>Developers can quickly make changes to the code base.</li>
              <li>
                Developers can also re-use code, migrating it to new projects.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
