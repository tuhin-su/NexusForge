import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { ThemeContext } from "./theme-context";

export default function ThemeProvider({ children }) {
  const [themeConfig, setThemeConfig] = useState({
    darkMode: false,

    token: {
      colorPrimary: "#1677ff",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",

      borderRadius: 8,
      fontSize: 14,

      colorBgContainer: "#ffffff",
      colorBgLayout: "#f5f5f5",

      colorText: "#000000d9",
    },

    components: {
      Button: {
        borderRadius: 8,
      },

      Card: {
        borderRadiusLG: 12,
      },

      Input: {
        controlHeight: 40,
      },
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        themeConfig,
        setThemeConfig,
      }}
    >
      <ConfigProvider
        theme={{
          algorithm: themeConfig.darkMode
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,

          token: themeConfig.token,

          components: themeConfig.components,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}