import React from "react";
import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import { Icon } from "@iconify/react";
import AuthorWidget from "../Widget/AuthorWidget";
import { pageTitle } from "../../helpers/PageTitle";

export default function BlogDetailsPage() {
  pageTitle("Blog Details");
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Stay up to date with our <br>latest blog post"
        variant="text-center"
        shape="shape_5"
        category="Security"
        date="17 Nov 2021"
        avatar="Tech"
        avatarLink="/"
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <img
          src="/images/blog/post_details_1.png"
          alt="Blog"
          className="cs_radius_15"
        />
        <div className="cs_height_60 cs_height_lg_40" />
        <div className="cs_post_details">
          <h3>
            It’s of no surprise that people are more concerned about the
            security of social media accounts more than that of their personal
            diaries as most of the confidential information is now a day stored
            on their social media accounts.Most of the people have a habit of
            storing their important work regarding credentials in the draft
            section of their account. Incase such an account is hacked, an
            entire organization that person is serving is at risk. So it’s very
            important to know how to secure your social media account.
          </h3>
          <p>
            It’s totally under your control that how to secure your social media
            accounts. In order to secure the social media accounts all you have
            to do is adopt a few security practices which are listed as follows:
          </p>
          <p>
            1.) Practice using strong passwords for social media accounts Users
            are allowed to select the password of their own choice. Hence most
            of the users select short and easy passwords so that they are easy
            to remember. Such accounts are at risk of getting hacked. So to
            counter this it is always recommended to use strong passwords.
            Strong passwords generally consist of: Length of more than 10
            characters. Combination of Uppercase and Lowercase alphabets,
            Special Symbols, and numbers. Random selection of strings instead of
            using dictionary words.
          </p>
          <p>
            2.) Using Cryptographic hashes as passwords The most secure way of
            protecting the account from getting hacked is using the
            cryptographic hashes of certain strings as a password. SHA and MD5
            hashes are very popular for hashing certain data in cryptography.
            Hashing is the method in cryptography by which input data is
            converted to a unique string of text of the same length regardless
            of the size of the input method. Let us consider this with an
            example. Suppose a user wants to use “pass1234” as a password. Even
            though it is 8 characters long and contains a combination of both
            alphabets as well as numbers yet it can be cracked by using password
            cracking tools. So we calculate the hash of this password using the
            MD5 hash calculator. Hashed password is:
            3e238da44a3f180f320a1e647b62b67c This password seems to be much
            stronger and certainly impossible for hackers to crack it. This way
            using Hashed Passwords make the social media accounts secure.
          </p>
          <p>
            3.) Updating Security Policies Whenever you create a social media
            account, you are provided with the default security policies. These
            policies are largely concerned with sharing your personal details on
            the social media platform. This greatly increased the possibility of
            your personal information being collected by the third party. So
            once you have created your account, you must review all the security
            policies before posting anything online and modify them according to
            your convenience.
          </p>
          <div className="cs_height_10 cs_height_lg_5" />
          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/blog/post_details_2.jpg"
                alt="Thumb"
                className="w-100"
              />
            </div>
            <div className="col-md-4">
              <img
                src="/images/blog/post_details_3.png"
                alt="Thumb"
                className="w-100"
              />
            </div>
            <div className="col-md-4">
              <img
                src="/images/blog/post_details_4.jpeg"
                alt="Thumb"
                className="w-100"
              />
            </div>
          </div>
          <div className="cs_height_10 cs_height_lg_5" />
          <h3></h3>
          <p>
            
          </p>
          <blockquote>
            “ But I must explain to you how all this mistaken idea of denouncing
            non off pleasure and praising pain was born and I will give you a
            complete account of the system, who expound the actual teachings of
            the great explorer”
            <small>Loren Mulari</small>
          </blockquote>
          <p>
            Righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by
            desire, that they cannot foresee the pain and trouble that are bound
            to ensue and equal blame belongs to those who fail in their duty
            through weakness of will, which is the same as saying through
            shrinking from toil and pain. These cases are perfectly simple and
            easy to distinguish.{" "}
          </p>
          <ul>
            <li>In a free hour, when our power of choice is untrammelled </li>
            <li>and when nothing prevents our being able to do what </li>
            <li>
              we like best, every pleasure is to be welcomed and every pain
              avoided.
            </li>
          </ul>
        </div>
        <div className="cs_height_30 cs_height_lg_10" />
        <div className="cs_post_share">
          <div className="cs_categories">
            <a href="/" className="cs_category">
              Marketing
            </a>
            <a href="/" className="cs_category">
              Campaign
            </a>
          </div>
          <div className="text-center">
            <div className="cs_post_share_btns">
              <a href="/">
                <Icon icon="fa6-brands:twitter" />
              </a>
              <a href="/">
                <Icon icon="fa6-brands:facebook-f" />
              </a>
              <a href="/">
                <Icon icon="fa6-brands:linkedin-in" />
              </a>
            </div>
            <span className="cs_post_share_title">Share this</span>
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_40" />
        <AuthorWidget />
        <div className="cs_height_88 cs_height_lg_60" />
        <h2 className="text-center cs_fs_50 mb-0">Leave A Reply</h2>
        <div className="cs_height_60 cs_height_lg_30" />
        <form action="#" className="row">
          <div className="col-lg-6">
            <input
              type="text"
              className="cs_form_field_2"
              placeholder="What’s Your Name?"
            />
            <div className="cs_height_50 cs_height_lg_30" />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="cs_form_field_2"
              placeholder="What’s Your Email?"
            />
            <div className="cs_height_50 cs_height_lg_30" />
          </div>
          <div className="col-lg-12">
            <textarea
              cols={30}
              rows={7}
              className="cs_form_field_2"
              placeholder="Feel Free To Write Your Comment"
            />
            <div className="cs_height_60 cs_height_lg_30" />
          </div>
          <div className="col-lg-12 text-center">
            <button className="cs_btn cs_style_1">
              Post Comment{" "}
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </button>
          </div>
        </form>
        <div className="cs_height_150 cs_height_lg_80" />
      </div>
    </>
  );
}
