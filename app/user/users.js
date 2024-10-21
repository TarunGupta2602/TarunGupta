// "use server"; 
// import pool from "../../lib/db";
// export const createUser = async (formData) => {
    

//     const name = formData.get('name');
//     const email = formData.get('email');
//     const message = formData.get('message');

//     if (!name || !email || !message) {
//         return { success: false, error: 'Name, email, or message is undefined' };
//     }

//     try {
//         await pool.execute('INSERT INTO users (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
//         return {
//             success: true,
//             redirect: '/' // Update with your actual page route
//         };
//     } catch (error) {
//         return { success: false, error: error.message };
//     }
// };

"use server";
import supabase from "../../lib/db"; // Import the Supabase client

export const createUser = async (formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { success: false, error: 'Name, email, or message is undefined' };
  }

  try {
    // Insert form data into your Supabase table (e.g., 'users')
    const { data, error } = await supabase
      .from('submissions') // Replace 'users' with your table name
      .insert([{ name, email, message }]);

    if (error) {
      throw new Error(error.message);
    }

    return {
      success: true,
      redirect: '/' // Update with your actual page route
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
