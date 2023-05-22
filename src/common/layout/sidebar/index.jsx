import { Layout, Menu } from "antd";
import React from "react";
import { useContext } from "react";
import { LayoutContext } from "../../../contexts";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import MenuSidebar from "./menu";

const { Sider } = Layout;

const MainSidebar = () => {
	const { collapsed } = useContext(LayoutContext);

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			theme="light"
			width={270}
			collapsedWidth={50}
		>
			<MenuSidebar />
		</Sider>
	);
};

export default MainSidebar;
