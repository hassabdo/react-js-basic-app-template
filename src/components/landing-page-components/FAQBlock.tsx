import React, { useEffect, useState } from "react";
import { Skeleton, Collapse } from "antd";
import PlusSmallIcon from "../../svg-components/icons/PlusSmallIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
const { Panel } = Collapse;


const FAQBlock = () => {
  const faqs = useSelector((state: RootState) => state.serivcesReducer.faqs);
  const isLoadingFAQs = useSelector((state: RootState) => state.serivcesReducer.isLoadingFAQs);
  const [faqsData, setFaqsData] = useState([]);
  useEffect(() => {
    if (faqs && faqs.length > 0) {
      setFaqsData(faqs.filter((faq: any, i: number) => faq.fetch_in_main))
    }
  }, [faqs])
  return (
    <div className={"faq-block"}>
      <div className={"max-width-container"}>
        <h2>Questions fréquentes ?</h2>
        <div className={"faq-wrapper"}>
        <Skeleton loading={isLoadingFAQs} active >
            {faqsData.length > 0 ? (
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => <PlusSmallIcon rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
              >
                {faqsData.map((faq: any, i: number) => (
                  <Panel header={<h3 className={"question"}>{faq.question}</h3>} key={faq.id} className="faq-item">
                    <p className={"response"} dangerouslySetInnerHTML={{ __html: faq.answer }}>
                    </p>
                  </Panel>
                ))}
              </Collapse>
            ) : (
              <em style={{color: "#bfbfbf", textAlign: "center", display: "block"}}>Aucune question</em>
            )}
          </Skeleton>
        </div>
      </div>

    </div>
  );
};

export default FAQBlock;
