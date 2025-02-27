module.exports = () => ({});
module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
        api: {
          rest: {
            defaultLimit: 100, // ค่าเริ่มต้นเป็น 100 รายการ
            maxLimit: 500, // สามารถดึงได้สูงสุด 500 รายการ
          },
        },
      },
    },
    // ...
  });