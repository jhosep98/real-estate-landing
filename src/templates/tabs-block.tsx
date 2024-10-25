"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import { TagTitleDescription, ToggleTabs } from "@wulperstudio/cms";

import { ContainerBlockWebTemplate } from "@/components";
import { Skeleton } from "@mui/material";

export const TabsBlockTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("tab-1");

  return (
    <ContainerBlockWebTemplate
      label={
        <TagTitleDescription
          title={
            <Typography
              component="h2"
              variant="h3"
              fontWeight="bold"
              textAlign="center"
            >
              Tabs
            </Typography>
          }
          description={
            <Typography color="text.secondary" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          }
          sx={{
            marginBottom: "3rem",
          }}
        />
      }
      labelPosition="outside"
    >
      <ToggleTabs
        activeTab={activeTab}
        elevation={0}
        tabs={[
          {
            id: "tab-1",
            label: "Tab 1",
            onClick: () => {
              setActiveTab("tab-1");
            },
          },
          {
            id: "tab-2",
            label: "Tab 2",
            onClick: () => {
              setActiveTab("tab-2");
            },
          },
        ]}
        sx={{
          backgroundColor: "rgb(247, 249, 252)",
          maxWidth: "40ch",
          marginInline: "auto",
        }}
      />

      {activeTab === "tab-1" && (
        <div>
          <Skeleton
            variant="rectangular"
            height={600}
            width="100%"
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Tab 1
          </Skeleton>
        </div>
      )}

      {activeTab === "tab-2" && (
        <div>
          <Skeleton
            variant="rectangular"
            height={600}
            width="100%"
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Tab 2
          </Skeleton>
        </div>
      )}
    </ContainerBlockWebTemplate>
  );
};
