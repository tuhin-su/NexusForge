import {
  Card,
  ColorPicker,
  Slider,
  Switch,
  Space,
  Typography
} from "antd";

import {
  useThemeBuilder
} from "../../app/providers/ThemeProvider";

export default function ThemeGenerator() {
  const {
    themeConfig,
    setThemeConfig
  } = useThemeBuilder();

  const updateToken = (
    key,
    value
  ) => {
    setThemeConfig(prev => ({
      ...prev,
      token: {
        ...prev.token,
        [key]: value
      }
    }));
  };

  return (
    <Card title="Theme Builder">
      <Space
        direction="vertical"
        style={{ width: "100%" }}
      >
        <Typography.Text>
          Dark Mode
        </Typography.Text>

        <Switch
          checked={themeConfig.darkMode}
          onChange={() =>
            setThemeConfig(prev => ({
              ...prev,
              darkMode:
                !prev.darkMode
            }))
          }
        />

        <Typography.Text>
          Primary Color
        </Typography.Text>

        <ColorPicker
          value={
            themeConfig.token
              .colorPrimary
          }
          onChange={c =>
            updateToken(
              "colorPrimary",
              c.toHexString()
            )
          }
        />

        <Typography.Text>
          Success Color
        </Typography.Text>

        <ColorPicker
          value={
            themeConfig.token
              .colorSuccess
          }
          onChange={c =>
            updateToken(
              "colorSuccess",
              c.toHexString()
            )
          }
        />

        <Typography.Text>
          Border Radius
        </Typography.Text>

        <Slider
          min={0}
          max={24}
          value={
            themeConfig.token
              .borderRadius
          }
          onChange={v =>
            updateToken(
              "borderRadius",
              v
            )
          }
        />

        <Typography.Text>
          Font Size
        </Typography.Text>

        <Slider
          min={12}
          max={24}
          value={
            themeConfig.token
              .fontSize
          }
          onChange={v =>
            updateToken(
              "fontSize",
              v
            )
          }
        />
      </Space>
    </Card>
  );
}