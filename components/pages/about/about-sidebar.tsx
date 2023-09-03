"use client";

import React from "react";
import styled from "@emotion/styled";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { aboutItems } from "@/configs/about-me";

const StyledSection = styled.section`
  height: calc(100vh - 108px);
  overflow-y: auto;
`;

const AboutSidebar = () => {
  return (
    <StyledSection className="sticky top-0 left-0 z-30 w-[311px] border-r border-foreground/20">
      <Accordion type="multiple" defaultValue={["personal-info"]}>
        {aboutItems.map((about, index) => {
          return (
            <AccordionItem
              key={about.label}
              value={about.label}
              className="border-foreground/20"
            >
              <AccordionTrigger
                isDefaultIcon={false}
                className="hover:no-underline h-[41px] justify-start gap-2 px-6"
              >
                <i className="ri-arrow-down-s-fill text-[18px] transition-transform duration-200" />
                <span>{about.label}</span>
              </AccordionTrigger>
              <AccordionContent className="border-t border-foreground/20">
                {about.items.map((item, index) => {
                  if (item.items) {
                    return (
                      <AccordionItem
                        key={item.label}
                        value={item.label}
                        className="border-foreground/20"
                      >
                        <AccordionTrigger
                          isDefaultIcon={false}
                          className="hover:no-underline h-[41px] justify-start gap-2 px-6"
                        >
                          <div className="flex items-center gap-2">
                            <i className={item.icon} />
                            {item.label}
                          </div>
                          <i className="ri-arrow-down-s-fill text-[18px] transition-transform duration-200" />
                        </AccordionTrigger>
                        <AccordionContent>
                          {item.items.map((subItem, index) => {
                            return (
                              <div key={subItem.label} className="pl-12 py-2">
                                <div className="flex items-center gap-2">
                                  <i className={`${subItem.icon}`} />
                                  <span>{subItem.label}</span>
                                </div>
                              </div>
                            );
                          })}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  }
                  return (
                    <div key={item.label} className="px-6 py-2">
                      <div className="flex items-center gap-2">
                        <i className={`${item.icon}`} />
                        <span>{item.label}</span>
                      </div>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </StyledSection>
  );
};

export default AboutSidebar;
