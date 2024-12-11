import { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import NavbarDropdown from "./NavbarDropdown";
import NavbarMobile from "./NavbarMobile";
import breakpoints from "assets/theme/base/breakpoints";
import { pachangaGreyLogo } from "../../assets/images/logos";
import { Sling as Hamburger } from "hamburger-react";

function Navbar({
    brand,
    routes,
    transparent,
    light,
    action,
    sticky,
    relative,
    center,
}) {
    const location = useLocation();
    const [dropdown, setDropdown] = useState("");
    const [dropdownEl, setDropdownEl] = useState("");
    const [dropdownName, setDropdownName] = useState("");
    const [nestedDropdown, setNestedDropdown] = useState("");
    const [nestedDropdownEl, setNestedDropdownEl] = useState("");
    const [nestedDropdownName, setNestedDropdownName] = useState("");
    const [arrowRef, setArrowRef] = useState(null);
    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [mobileView, setMobileView] = useState(false);

    const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

    useEffect(() => {
        function displayMobileNavbar() {
            if (window.innerWidth < breakpoints.values.lg) {
                setMobileView(true);
                setMobileNavbar(false);
            } else {
                setMobileView(false);
                setMobileNavbar(false);
            }
        }

        window.addEventListener("resize", displayMobileNavbar);

        displayMobileNavbar();

        return () => window.removeEventListener("resize", displayMobileNavbar);
    }, []);

    useEffect(() => {
        if (mobileNavbar || dropdown || nestedDropdown) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [mobileNavbar, dropdown, nestedDropdown]);

    const renderNavbarItems = routes.map(
        ({ name, icon, href, route, collapse }) => (
            <NavbarDropdown
                key={name}
                name={name}
                icon={icon}
                href={href}
                route={route}
                collapse={Boolean(collapse)}
                onMouseEnter={({ currentTarget }) => {
                    if (collapse) {
                        setDropdown(currentTarget);
                        setDropdownEl(currentTarget);
                        setDropdownName(name);
                    }
                }}
                onMouseLeave={() => collapse && setDropdown(null)}
            />
        )
    );

    const renderRoutes = routes.map(
        ({ name, collapse, columns, rowsPerColumn }) => {
            let template;

            if (collapse && columns && name === dropdownName) {
                const calculateColumns = collapse.reduce(
                    (resultArray, item, index) => {
                        const chunkIndex = Math.floor(index / rowsPerColumn);

                        if (!resultArray[chunkIndex]) {
                            resultArray[chunkIndex] = [];
                        }

                        resultArray[chunkIndex].push(item);

                        return resultArray;
                    },
                    []
                );

                template = (
                    <Grid key={name} container spacing={3} py={1} px={1.5}>
                        {calculateColumns.map((cols, key) => {
                            const gridKey = `grid-${key}`;
                            const dividerKey = `divider-${key}`;

                            return (
                                <Grid
                                    key={gridKey}
                                    item
                                    xs={12 / columns}
                                    sx={{ position: "relative" }}
                                >
                                    {cols.map((col, index) => (
                                        <Fragment key={col.name}>
                                            <MKTypography
                                                display="block"
                                                variant="button"
                                                fontWeight="bold"
                                                textTransform="capitalize"
                                                py={1}
                                                px={0.5}
                                                mt={index !== 0 ? 2 : 0}
                                                color="white"
                                            >
                                                {col.name}
                                            </MKTypography>
                                            {col.collapse.map((item) => (
                                                <MKTypography
                                                    key={item.name}
                                                    component={Link}
                                                    to={item.route}
                                                    display="flex"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                    variant="button"
                                                    textTransform="capitalize"
                                                    minWidth="11.25rem"
                                                    color="secondary"
                                                    fontWeight="regular"
                                                    py={0.625}
                                                    px={2}
                                                    sx={({
                                                        palette: {
                                                            grey,
                                                            dark,
                                                            black,
                                                        },
                                                        borders: {
                                                            borderRadius,
                                                        },
                                                    }) => ({
                                                        borderRadius:
                                                            borderRadius.md,
                                                        cursor: "pointer",
                                                        transition:
                                                            "all 300ms linear",

                                                        "&:hover": {
                                                            backgroundColor:
                                                                grey[200],
                                                            color: dark.main,
                                                        },
                                                    })}
                                                >
                                                    {item.name}
                                                </MKTypography>
                                            ))}
                                        </Fragment>
                                    ))}
                                    {key !== 0 && (
                                        <Divider
                                            key={dividerKey}
                                            orientation="vertical"
                                            sx={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "-4px",
                                                transform: "translateY(-45%)",
                                                height: "90%",
                                            }}
                                        />
                                    )}
                                </Grid>
                            );
                        })}
                    </Grid>
                );
            } else if (collapse && name === dropdownName) {
                template = collapse.map((item) => {
                    const linkComponent = {
                        component: MuiLink,
                        href: item.href,
                        target: "_blank",
                        rel: "noreferrer",
                    };

                    const routeComponent = {
                        component: Link,
                        to: item.route,
                    };

                    return (
                        <MKTypography
                            key={item.name}
                            {...(item.route ? routeComponent : linkComponent)}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            variant="button"
                            textTransform="capitalize"
                            minWidth={item.description ? "14rem" : "12rem"}
                            color={item.description ? "dark" : "text"}
                            fontWeight={item.description ? "bold" : "regular"}
                            py={item.description ? 1 : 0.625}
                            px={2}
                            sx={({
                                palette: { grey, dark, black },
                                borders: { borderRadius },
                            }) => ({
                                borderRadius: borderRadius.md,
                                cursor: "pointer",
                                transition: "all 300ms linear",

                                "&:hover": {
                                    backgroundColor: grey[200],
                                    color: dark.main,

                                    "& *": {
                                        color: dark.main,
                                    },
                                },
                            })}
                            onMouseEnter={({ currentTarget }) => {
                                if (item.collapse) {
                                    setNestedDropdown(currentTarget);
                                    setNestedDropdownEl(currentTarget);
                                    setNestedDropdownName(item.name);
                                }
                            }}
                            onMouseLeave={() => {
                                if (item.collapse) {
                                    setNestedDropdown(null);
                                }
                            }}
                        >
                            {item.description ? (
                                <MKBox>
                                    {item.name}
                                    <MKTypography
                                        display="block"
                                        variant="button"
                                        color="text"
                                        fontWeight="regular"
                                        sx={{ transition: "all 300ms linear" }}
                                    >
                                        {item.description}
                                    </MKTypography>
                                </MKBox>
                            ) : (
                                item.name
                            )}
                            {item.collapse && (
                                <Icon
                                    fontSize="small"
                                    sx={{
                                        fontWeight: "normal",
                                        verticalAlign: "middle",
                                        mr: -0.5,
                                    }}
                                >
                                    keyboard_arrow_right
                                </Icon>
                            )}
                        </MKTypography>
                    );
                });
            }

            return template;
        }
    );

    const dropdownMenu = (
        <Popper
            anchorEl={dropdown}
            popperRef={null}
            open={Boolean(dropdown)}
            placement="top-start"
            transition
            style={{ zIndex: 10 }}
            modifiers={[
                {
                    name: "arrow",
                    enabled: true,
                    options: {
                        element: arrowRef,
                    },
                },
            ]}
            onMouseEnter={() => setDropdown(dropdownEl)}
            onMouseLeave={() => {
                if (!nestedDropdown) {
                    setDropdown(null);
                    setDropdownName("");
                }
            }}
        >
            {({ TransitionProps }) => (
                <Grow
                    {...TransitionProps}
                    sx={{
                        transformOrigin: "left top",
                        backgroundColor: ({
                            palette: { black },
                            functions: { rgba },
                        }) => rgba(black.main, 0.8),
                        backdropFilter: "saturate(200%) blur(30px)",
                        boxShadow: ({ boxShadows: { xxl } }) => xxl,
                    }}
                >
                    <MKBox borderRadius="lg">
                        <MKTypography variant="h1" color="white">
                            <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                                arrow_drop_up
                            </Icon>
                        </MKTypography>
                        <MKBox shadow="lg" borderRadius="lg" p={2} mt={2}>
                            {renderRoutes}
                        </MKBox>
                    </MKBox>
                </Grow>
            )}
        </Popper>
    );

    const renderNestedRoutes = routes.map(({ collapse, columns }) =>
        collapse && !columns
            ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
                  let template;

                  if (parentName === nestedDropdownName) {
                      template =
                          nestedCollapse &&
                          nestedCollapse.map((item) => {
                              const linkComponent = {
                                  component: MuiLink,
                                  href: item.href,
                                  target: "_blank",
                                  rel: "noreferrer",
                              };

                              const routeComponent = {
                                  component: Link,
                                  to: item.route,
                              };

                              return (
                                  <MKTypography
                                      key={item.name}
                                      {...(item.route
                                          ? routeComponent
                                          : linkComponent)}
                                      display="flex"
                                      justifyContent="space-between"
                                      alignItems="center"
                                      variant="button"
                                      textTransform="capitalize"
                                      minWidth={
                                          item.description ? "14rem" : "12rem"
                                      }
                                      color={item.description ? "dark" : "text"}
                                      fontWeight={
                                          item.description ? "bold" : "regular"
                                      }
                                      py={item.description ? 1 : 0.625}
                                      px={2}
                                      sx={({
                                          palette: { grey, dark },
                                          borders: { borderRadius },
                                      }) => ({
                                          borderRadius: borderRadius.md,
                                          cursor: "pointer",
                                          transition: "all 300ms linear",

                                          "&:hover": {
                                              backgroundColor: grey[200],
                                              color: dark.main,

                                              "& *": {
                                                  color: dark.main,
                                              },
                                          },
                                      })}
                                  >
                                      {item.description ? (
                                          <MKBox>
                                              {item.name}
                                              <MKTypography
                                                  display="block"
                                                  variant="button"
                                                  color="text"
                                                  fontWeight="regular"
                                                  sx={{
                                                      transition:
                                                          "all 300ms linear",
                                                  }}
                                              >
                                                  {item.description}
                                              </MKTypography>
                                          </MKBox>
                                      ) : (
                                          item.name
                                      )}
                                      {item.collapse && (
                                          <Icon
                                              fontSize="small"
                                              sx={{
                                                  fontWeight: "normal",
                                                  verticalAlign: "middle",
                                                  mr: -0.5,
                                              }}
                                          >
                                              keyboard_arrow_right
                                          </Icon>
                                      )}
                                  </MKTypography>
                              );
                          });
                  }

                  return template;
              })
            : null
    );

    const nestedDropdownMenu = (
        <Popper
            anchorEl={nestedDropdown}
            popperRef={null}
            open={Boolean(nestedDropdown)}
            placement="right-start"
            transition
            style={{ zIndex: 10 }}
            onMouseEnter={() => {
                setNestedDropdown(nestedDropdownEl);
            }}
            onMouseLeave={() => {
                setNestedDropdown(null);
                setNestedDropdownName("");
                setDropdown(null);
            }}
        >
            {({ TransitionProps }) => (
                <Grow
                    {...TransitionProps}
                    sx={{
                        transformOrigin: "left top",
                        background: ({ palette: { white } }) => white.main,
                    }}
                >
                    <MKBox ml={2.5} mt={-2.5} borderRadius="lg">
                        <MKBox
                            shadow="lg"
                            borderRadius="lg"
                            py={1.5}
                            px={1}
                            mt={2}
                        >
                            {renderNestedRoutes}
                        </MKBox>
                    </MKBox>
                </Grow>
            )}
        </Popper>
    );

    return (
        <Container
            sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}
        >
            <MKBox
                py={1}
                px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
                my={relative ? 0 : 2}
                mx={relative ? 0 : 3}
                width={relative ? "100%" : "calc(100% - 48px)"}
                borderRadius="xl"
                shadow={transparent ? "none" : "md"}
                color={light ? "white" : "dark"}
                position={relative ? "relative" : "absolute"}
                left={0}
                zIndex={3}
                sx={({
                    palette: { transparent: transparentColor, black, white },
                    functions: { rgba },
                }) => ({
                    backgroundColor: rgba(black.main, 0.8),
                    backdropFilter: `saturate(200%) blur(30px)`,
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                })}
            >
                <MKBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <MKBox
                        component={Link}
                        to="/"
                        lineHeight={1}
                        py={transparent ? 1.5 : 0.75}
                        pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
                    >
                        <MKTypography
                            variant="button"
                            fontWeight="bold"
                            color={light ? "white" : "dark"}
                        >
                            {brand}
                        </MKTypography>
                    </MKBox>
                    <MKBox
                        color="inherit"
                        display={{ xs: "none", lg: "flex" }}
                        ml="auto"
                        mr={center ? "auto" : 0}
                    >
                        {renderNavbarItems}
                    </MKBox>
                    <MKBox ml={{ xs: "auto", lg: 0 }}>
                        <MKButton
                            component={action?.type === "internal" ? Link : "a"}
                            to={
                                action?.type === "internal"
                                    ? action.route
                                    : undefined
                            }
                            href={
                                action?.type === "external"
                                    ? action.route
                                    : undefined
                            }
                            target={
                                action?.type === "external"
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                action?.type === "external"
                                    ? "noreferrer"
                                    : undefined
                            }
                            variant={
                                action?.color === "white" ||
                                action?.color === "default"
                                    ? "contained"
                                    : "gradient"
                            }
                            color={action?.color ? action.color : "info"}
                            size="small"
                            sx={{
                                visibility:
                                    location.pathname !== "/purchase"
                                        ? "visible"
                                        : "hidden",
                            }}
                        >
                            {action?.label || ""}
                        </MKButton>
                    </MKBox>

                    <MKBox
                        display={{ xs: "inline-block", lg: "none" }}
                        lineHeight={0}
                        py={1.5}
                        pl={1.5}
                        color={transparent ? "white" : "white"}
                        sx={{ cursor: "pointer" }}
                        onClick={openMobileNavbar}
                    >
                        <Hamburger
                            toggled={mobileNavbar}
                            toggle={openMobileNavbar}
                        />
                    </MKBox>
                </MKBox>
                <MKBox
                    bgColor={transparent ? "white" : "transparent"}
                    shadow={transparent ? "lg" : "none"}
                    borderRadius="xl"
                    px={transparent ? 2 : 0}
                >
                    {mobileView && (
                        <NavbarMobile routes={routes} open={mobileNavbar} />
                    )}
                </MKBox>
            </MKBox>
            {dropdownMenu}
            {nestedDropdownMenu}
        </Container>
    );
}

Navbar.defaultProps = {
    brand: (
        <img
            src={pachangaGreyLogo}
            alt="Pachanga Tournament"
            style={{ height: "60px" }}
        />
    ),
    transparent: false,
    light: false,
    action: false,
    sticky: false,
    relative: false,
    center: false,
};

Navbar.propTypes = {
    brand: PropTypes.node,
    routes: PropTypes.arrayOf(PropTypes.shape).isRequired,
    transparent: PropTypes.bool,
    light: PropTypes.bool,
    action: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            type: PropTypes.oneOf(["external", "internal"]).isRequired,
            route: PropTypes.string.isRequired,
            color: PropTypes.oneOf([
                "primary",
                "secondary",
                "info",
                "success",
                "warning",
                "error",
                "dark",
                "light",
                "default",
                "white",
                "black",
            ]),
            label: PropTypes.string.isRequired,
        }),
    ]),
    sticky: PropTypes.bool,
    relative: PropTypes.bool,
    center: PropTypes.bool,
};

export default Navbar;
