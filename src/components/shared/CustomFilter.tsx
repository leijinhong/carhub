import { StyleProvider } from "@ant-design/cssinjs";
import { useState } from "react";
import { Button } from "antd";

interface PropsType {
    title: string;
}

const CustomFilter = (props: PropsType) => {
    const [value, setValue] = useState<string>(props.title);

    return (
        <StyleProvider hashPriority="high">
            <Button type="primary">Button</Button>
        </StyleProvider>
    );
};

export default CustomFilter;
