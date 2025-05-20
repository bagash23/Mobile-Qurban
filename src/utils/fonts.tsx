const fontFamily = {
    bold: 'Poppins-Bold',
    medium: 'Poppins-Medium',
    regular: 'Poppins-Regular',
    SemiBold: 'Poppins-SemiBold',
};

const Fonts = {
    regular: {
        fontFamily: fontFamily.regular,
        fontWeight: 'normal' as const,
      },
      medium: {
        fontFamily: fontFamily.medium,
        fontWeight: 'normal' as const,
      },
      bold: {
        fontFamily: fontFamily.bold,
        fontWeight: 'normal' as const,
      },
    fontFamily,
};

export default Fonts;
