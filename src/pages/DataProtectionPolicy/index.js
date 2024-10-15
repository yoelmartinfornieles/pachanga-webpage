// @mui material components
import Card from "@mui/material/Card";

import { Statement, Header } from "../../shared/sections";
import dataProtectionPolicyStatement from "./sections/data/dataProtectionPolicyStatement";
import { dataProtectionPolicyBanner } from "../../assets/images";

function DataProtectionPolicy() {
    return (
        <>
            <Header
                title={dataProtectionPolicyStatement.title}
                image={dataProtectionPolicyBanner}
            />
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -5,
                    mb: 4,
                    backgroundColor: ({
                        palette: { black },
                        functions: { rgba },
                    }) => rgba(black.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Statement title="" body={dataProtectionPolicyStatement.body} />
            </Card>
        </>
    );
}

export default DataProtectionPolicy;
