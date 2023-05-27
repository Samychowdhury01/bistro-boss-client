import React, { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const tabItems = [
    { id: 1, name: "salads" },
    { id: 2, name: "pizza" },
    { id: 3, name: "soups" },
    { id: 4, name: "desserts" },
    { id: 5, name: "drinks" },
  ];
  const categories = tabItems.map((item) => item.name);
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="mb-20">
         <Helmet>
                <title>
                    Bistro Boss | Order Food
                </title>
            </Helmet>
      <Cover
        title="Order Food"
        description="WOULD YOU LIKE TO TRY OUR FOOD?"
        img={orderCoverImg}
      />
      <div className="mt-32">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex flex-wrap md:flex-nowrap justify-center">
            {tabItems.map((tabItem, index) => (
              <Tab
                key={tabItem.id}
                className={`py-4 px-6 mb-12 cursor-pointer hover:text-yellow-500 uppercase ${
                  index === tabIndex
                    ? "text-yellow-500 border-b-4 border-yellow-500"
                    : ""
                }`}
              >
                {tabItem.name}
              </Tab>
            ))}
          </TabList>
          <TabPanel>
            <OrderTab items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={salads} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
