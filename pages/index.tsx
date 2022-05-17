import React from "react";

import { Avatar, colors, Grid, Typography, useTheme } from "@mui/material";
import MaterialTable, { Column } from "@material-table/core";
import { makeStyles } from "tss-react/mui";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { GetPhotos, getPhotos, useGetPhotos } from "../query";

const useStyles = makeStyles()((theme) => ({
  textBold: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  avatar: { width: 56, height: 56 },
}));

export default function Home() {
  const theme = useTheme();
  const { data, isLoading } = useGetPhotos();
  const { classes } = useStyles();

  const columns = [
    {
      title: "Id",
      field: "id",
      grouping: false,
      align: "center",
      cellStyle: {
        width: "10%",
        maxWidth: "10%",
      },
      headerStyle: {
        width: "10%",
        maxWidth: "10%",
      },
      render: ({ id }) => (
        <Typography className={classes.textBold}>{id}</Typography>
      ),
    },
    {
      title: "Title",
      field: "title",
      grouping: false,
      cellStyle: {
        width: "30%",
        maxWidth: "30%",
      },
      headerStyle: {
        width: "30%",
        maxWidth: "30%",
      },
    },
    {
      title: "URL",
      field: "url",
      grouping: false,
      render: ({ url }) => (
        <Avatar alt="Remy Sharp" src={url} className={classes.avatar} />
      ),
    },
  ] as Column<any>[];

  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <MaterialTable
          title=""
          columns={columns}
          data={[...data]}
          style={theme.dtPaper}
          options={{
            headerStyle: {
              ...theme.tableHeader,
              whiteSpace: "nowrap",
            } as React.CSSProperties,
            padding: "dense",
            pageSize: 30,
            pageSizeOptions: [30, 50, 100],
            emptyRowsWhenPaging: false,
            grouping: false,
            searchFieldVariant: "outlined",
            searchFieldStyle: {
              height: "32px",
            },
            loadingType: "overlay",
            paginationPosition: "both",
            showFirstLastPageButtons: false,
            tableLayout: "fixed",
            minBodyHeight: 500,
            draggable: false,
          }}
          isLoading={isLoading}
        />
      </Grid>
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(GetPhotos, getPhotos);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};
