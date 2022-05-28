import React from 'react';
import Devider from '../Shared/Devider/Devider';
import './Blog.css';

const Blog = () => {
    return (
        <div class="mx-16 my-8 text-center">
            <div>
                <h1 class="pb-6 text-5xl md:text-7xl">Blogs</h1>
            </div>
            <Devider />
            <div>
                <div class="blog-section">
                    <h1 class="pb-6 text-xl md:text-3xl font-bold">1. How will you improve the performance of a React Application?</h1>
                    <p class="text-justify px-8 text-base md:text-2xl">By default, React applications have an extremely quick user interface. Developers may, however, run into performance concerns as a program grows.
                        <br />
                        Ways of improving the performance of a React Application:
                        <br />
                        <br />
                        <ul class="px-10 list-disc">
                            <li>Using React speed optimization tools, detecting unnecessary renders in a React 16 application</li>
                            <li>Using the "Why did you update" library, detecting superfluous component rendering.</li>
                            <li>React performance optimization by removing redundant component rendering</li>
                            <li>shouldComponentUpdate is used to prevent renderings that are unneeded.</li>
                            <li>PureComponent improves efficiency by removing superfluous renderings.</li>
                            <li>Immutable.js prevents unnecessary renders in React.</li>
                            <li>For a React-based PWA, identifying problematic bundles</li>
                            <li>Using Gzip compression to optimize the Javascript bundle</li>
                            <li>Using code splitting, we can improve the app's loading time even further.</li>
                            <li>Lazy loading images improves the app's loading time.</li>
                            <li>In comparison to a client-side rendered app, SSR assisted the Housing.com engineering team in serving useful content to customers 3 seconds faster on standard 3G networks.</li>
                            <li>Using React Virtualized List to improve list rendering</li>
                            <li>Using the right component keys to improve the efficiency of React lists</li>
                        </ul>
                    </p>
                </div>
                <div class="blog-section">
                    <h1 class="pb-6 text-xl md:text-3xl font-bold">2. What are the different ways to manage a state in a React application?</h1>
                    <p class="text-justify px-8 text-base md:text-2xl">
                        It's important to understand what forms of state relevant when discussing state in applications.
                        <br />
                        There are four main types of state you need to properly manage in your React apps:
                        <br />
                        <br />
                        <ul class="px-10 list-disc">
                            <li><span class="font-bold">Local state: </span>The data we handle in one or more components is referred to as local state. The <span class="font-bold">useState()</span> hook is most commonly used to handle local state in React.
                                <br />
                                Local state is required, for example, to show or hide a modal component or to monitor values for a form component, such as form submission, when the form is disabled, and the values of the form's inputs.</li>
                            <li><span class="font-bold">Global state: </span>The data we handle across several components is referred to as global state. When we wish to receive and change data from everywhere in our app, or at least many components, we need global state.
                                <br />
                                Authenticated user state is a good example of global state. It is important to obtain and alter a user's data across our program if they are signed in. Sometimes states that we believe should be local become worldwide.</li>
                            <li><span class="font-bold">Server state: </span>Data from an external server that has to be combined with our current UI state.
                                Server state is a simple notion, but managing it alongside all of our local and global UI state may be difficult. Every time you download or change data from an external server, numerous bits of state, such as loading and error state, must be maintained.
                                <br />
                                SWR and React Query, for example, make handling server state a lot easier.</li>
                            <li><span class="font-bold">URL state: </span>Data found on our URLs, such as pathnames and query parameters. The category of URL state is sometimes overlooked, yet it is an essential one. Many significant aspects of our application rely on URL state access in many circumstances Consider how difficult it would be to create a blog without the ability to retrieve a post based on its slug or id in the URL!
                                <br />
                                There are definitely more state components that may be identified, but these are the most important ones to consider for most applications you develop.</li>
                        </ul>
                    </p>
                </div>
                <div class="blog-section">
                    <h1 class="pb-6 text-xl md:text-3xl font-bold">3. How does prototypical inheritance work?</h1>
                    <p class="text-justify px-8 text-base md:text-2xl">
                        Simply explained, prototype inheritance refers to the ability to access characteristics of one object from another. We utilize a JavaScript prototype to extend an existing object constructor with additional attributes and functions. After that, we can instruct our JS code to inherit attributes from a prototype. Through a reference pointer function, we may reuse attributes or methods from one JavaScript object to another.
                        <br />
                        The idea of prototype chaining is used in prototypal inheritance. Let's dig further into that idea. Every object has a <span class="font-bold">[[Prototype]]</span> property that links to another object or null. Consider a <span class="font-bold">[[Prototype]]</span> attribute on object C that points to object B. The <span class="font-bold">[[Prototype]]</span> attribute of item B links to prototype object A. This process continues indefinitely, establishing a prototype chain.
                        <br />
                        When we search our code, we leverage this idea. When we need to discover a property in an object, we look for it first in the object, then in the prototype, and so on. As a result, the complete prototype chain is explored until the property or null is discovered.
                    </p>
                </div>
                <div class="blog-section">
                    <h1 class="pb-6 text-xl md:text-3xl font-bold">4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p class="text-justify px-8 text-base md:text-2xl">
                    Because react has a built-in process, setProducts is used. When we set a product, it reloads, however when we set products = [...], it does not.
                    </p>
                </div>
                <div class="blog-section">
                    <h1 class="pb-6 text-xl md:text-3xl font-bold">5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p class="text-justify px-8 text-base md:text-2xl">
                    findedProducts = products.filter(product => product.name===name)
                    </p>
                </div>
                <div class="blog-section">
                    <h1 class="pb-6 text-xl md:text-3xl font-bold">6. What is a unit test? Why should write unit tests?</h1>
                    <p class="text-justify px-8 text-base md:text-2xl">
                        Unit testing is a software testing process that involves testing "units," or individual program components. To ensure that their code is working properly, developers build unit tests. This aids future bug detection and protection.
                        <br />
                        Unit tests are sometimes written before the code is written. Test-driven development (TDD) is another name for this method. TDD converts requirements into test cases, and then improves the product to pass the new tests. No code that hasn't been demonstrated to fulfill established requirements is added in this technique. Unit testing is similar in that it allows developers to change code without impacting the overall operation of the product.
                        <br />
                        Some programmers overlook the significance of writing unit tests. The following are five advantages of unit testing that you should examine before making your own decision.
                        <br />
                        <br />
                        <ul class="px-10 list-disc">
                            <li><span class="font-bold">Any bugs are found easily and quicker: </span>Tested code is more trustworthy than untested code. If a future modification breaks something in the code, developers will be able to quickly pinpoint the source of the problem rather of having to sift through a large codebase.
                                <br />
                                Developers should run all unit tests or a collection of tests locally first to ensure that any coding changes don't break the current code. Consider the human element, however: After making changes, a developer may forget to run unit tests and publish possibly broken code to a common branch. Many businesses use a continuous development method to avoid this. This is accomplished via continuous integration tools, which allow developers to run unit tests automatically. A cool, logical machine will thus identify any undesired modifications in the code.
                                <br />
                                The tools used for continuous integration determine how quickly non-working code may be detected. Tests can be designed to run as a one-time check or in real-time to examine changes. In a nutshell, unit tests assist developers in swiftly detecting and correcting errors. Teams may move on to the next step of a project with fewer resources wasted investigating issues.</li>

                            <li><span class="font-bold">Unit testing saves time and money: </span>Steve McConnell included a table in his book "Code Complete" that shows the cost of correcting problems at various phases of the product lifecycle. The table indicates that the earlier a fault is discovered, the cheaper it is to fix it.
                                <br />
                                Many flaws are discovered at the software building stage when unit tests are performed, preventing them from spreading to later phases, such as when the product is released. This reduces the expenses of issue fixes later in the development cycle, as well as providing benefits to end-users who are spared from dealing with a flawed product. You'll also save a lot of time and money with better test time estimation.</li>

                            <li><span class="font-bold">Unit testing provides documentation: </span>Unit tests are a sort of living product documentation. Developers can use unit tests to acquire a fundamental view of the logic of a module and the system as a whole. Unit test cases are indications that provide information about whether a software component is being used correctly or incorrectly. As a result, these examples serve as excellent documentation for these indications.
                                <br />
                                <ul class="px-10 list-disc">
                                    <li><span class="font-bold">R2: Reusable and Reliable: </span>Individual product modules are segregated from one another and have their own area of responsibility inside unit testing environments. As a result of being tested in a controlled environment, the code is more reliable and hence reusable. Clean, efficient, and consistent code is a win-win for everyone. Unit testing helps to speed up this process.
                                    </li>
                                </ul>
                            </li>

                            <li><span class="font-bold">Unit testing helps gauge performance: </span>Wouldn't it be fantastic if you could discover your software's potential flaws before it went into production, and users could notice them on their own? Unit tests can help you avoid wasting time looking for answers to problems that don't exist. If you're working with a hashed list, for example, you might want to see how it performs as the list expands. The growth rate is a mystery. From here, you'll most likely use unit tests to try out situations with varied degrees of likelihood, from extremely plausible to ludicrous. If you're certain that the hashed list won't exceed 10,000 items under any conditions, you're good to go at 100,000. You've established your software's capability, thus there's no need to test it further.</li>

                            <li><span class="font-bold">Unit testing improves code coverage: </span>So, software unit testing is fantastic, but how much coverage is required? According to Uncle Bob, an American software developer, the aim of test coverage should be to cover 100% of the code. On this topic, developer opinions differ: some advocate for a comprehensive code coverage strategy, while others believe it is unnecessary - a topic too broad for this essay. In any case, you may use a variety of tools to calculate the entire percentage of a project, individual module, or function's coverage while writing unit tests. These tools can also graphically show the code sections covered by tests and highlight the areas where unit tests are most beneficial.
                                <br />
                                It's really important to determine whether a certain line will ever be run or whether you can safely remove it during the active code writing stage. If you have proper unit tests, you can quickly obtain coverage numbers and determine if a code line is ever useful. If it isn't, try adding another test to your code coverage. Remove the unneeded code if your test suite currently covers all potential cases. However, the requirement for further testing indicates that cyclomatic complexity is growing.</li>
                        </ul>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;