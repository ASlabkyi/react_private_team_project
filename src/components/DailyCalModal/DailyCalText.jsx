import React from 'react';
import {
    Box,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
  } from '@mui/material';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';

export const DailyCalText = ({
    open,
    dailyRate,
    notAllowedProducts,
    handleClose,
  }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
      }));
      const [dense] = React.useState(false);
      const notAllowedProductsArray = Array.from(notAllowedProducts);
    
      const generate = () => {
        return notAllowedProductsArray.slice(0, 5).map((product, index) => (
          <ListItem
            key={index}
            sx={{
              marginBottom: '0',
              marginTop: '0',
              paddingBottom: '0',
              paddingTop: '0',
            }}
          >
            <ListItemText
              primary={product}
              sx={{
                color: '#9B9FAA',
                fontFamily: 'Verdana',
                fontWeight: '400',
                fontSize: '14px',
                textAlign: 'start',
              }}
            />
          </ListItem>
        ));
      };
    
      return (
          <Box textAlign="center" open={open} onClose={handleClose}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontFamily: 'Verdana',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '30px',
                lineHeight: '1,6',
                marginTop: '64px',
                marginLeft: '82px',
                marginRight: '82px',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Your recommended daily calorie intake is
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ mt: 4, mb: 2 }}
              fontFamily="Verdana"
              color="#264061"
              fontStyle="normal"
              fontWeight="900"
              fontSize="35px"
              lineHeight="140%"
              marginBottom="44px"
              textAlign="center"
            >
              {dailyRate}
              <span>kcal</span>
            </Typography>
            <Box textAlign="start">
              <Typography
                sx={{ mt: 4, mb: 2 }}
                variant="h6"
                component="div"
                fontFamily="Verdana"
                fontStyle="normal"
                fontWeight="700"
                fontSize="18px"
                lineHeight="17px"
                marginBottom="20px"
                marginRight="40px"
                textAlign="center"
              >
                Foods you should not eat
              </Typography>
              <Demo>
                <List dense={dense} sx={{ width: '300px', margin: '0 auto' }}>
                  {generate()}
                </List>
              </Demo>
            </Box>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                if (isLoggedIn) {
                  handleClose();
                } else {
                  window.location.href = '/react_private_team_project/register';
                }
              }}
              sx={{
                width: '210px',
                height: '43px',
                marginBottom: { xs: '41px', md: '48px', lg: '82px' },
                marginTop: '40px',
                textAlign: 'center',
                justifyContent: 'center',
                background: '#FC842D',
                boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
                borderRadius: '30px',
                textTransform: 'none',
                fontFamily: 'Verdana',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '17px',
                letterSpacing: {
                  xs: '0.04em',
                  sm: 'unset',
                },
                '&:hover': {
                  background: '#FC842D',
                },
              }}
            >
              Start losing weight
            </Button>
          </Box>
      );
    };