"use client";
import {
  AppBar,
  Button,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

export function FooterBar() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("home");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <AppBar position="fixed" color="default" className="top-auto bottom-0">
        <Toolbar className="justify-around">
          {["home", "calendário", "perfil", "configurações"].map((tab) => (
            <Button
              key={tab}
              color={activeTab === tab ? "primary" : "inherit"}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "bg-mediumPink text-white"
                  : "text-[#5A5E61]"
              } ${isMobile ? "text-xs" : ""}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
