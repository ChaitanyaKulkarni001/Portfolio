import * as adobeXd from './skills/adobe-xd.svg';
import adobeaudition from './skills/adobeaudition.svg';
import afterEffects from './skills/after-effects.svg';
import angular from './skills/angular.svg';
import aws from './skills/aws.svg';
import azure from './skills/azure.svg';
import blender from './skills/blender.svg';
import bootstrap from './skills/bootstrap.svg';
import bulma from './skills/bulma.svg';
import c from './skills/c.svg';
import canva from './skills/canva.svg';
import capacitorjs from './skills/capacitorjs.svg';
import coffeescript from './skills/coffeescript.svg';
import cplusplus from './skills/cplusplus.svg';
import csharp from './skills/csharp.svg';
import css from './skills/css.svg';
import dart from './skills/dart.svg';
import deno from './skills/deno.svg';
import django from './skills/django.svg';
import docker from './skills/docker.svg';
import fastify from './skills/fastify.svg';
import figma from './skills/figma.svg';
import firebase from './skills/firebase.svg';
import flutter from './skills/flutter.svg';
import gcp from './skills/gcp.svg';
import gimp from './skills/gimp.svg';
import git from './skills/git.svg';
import go from './skills/go.svg';
import graphql from './skills/graphql.svg';
import haxe from './skills/haxe.svg';
import html from './skills/html.svg';
import illustrator from './skills/illustrator.svg';
import ionic from './skills/ionic.svg';
import java from './skills/java.svg';
import javascript from './skills/javascript.svg';
import julia from './skills/julia.svg';
import kotlin from './skills/kotlin.svg';
import lightroom from './skills/lightroom.svg';
import markdown from './skills/markdown.svg';
import materialui from './skills/materialui.svg';
import matlab from './skills/matlab.svg';
import memsql from './skills/memsql.svg';
import microsoftoffice from './skills/microsoftoffice.svg';
import mongoDB from './skills/mongoDB.svg';
import mysql from './skills/mysql.svg';
import nextJS from './skills/nextJS.svg';
import nginx from './skills/nginx.svg';
import numpy from './skills/numpy.svg';
import nuxtJS from './skills/nuxtJS.svg';
import opencv from './skills/opencv.svg';
import photoshop from './skills/photoshop.svg';
import php from './skills/php.svg';
import picsart from './skills/picsart.svg';
import postgresql from './skills/postgresql.svg';
import premierepro from './skills/premierepro.svg';
import python from './skills/python.svg';
import pytorch from './skills/pytorch.svg';
import react from './skills/react.svg';
import ruby from './skills/ruby.svg';
import selenium from './skills/selenium.svg';
import sketch from './skills/sketch.svg';
import strapi from './skills/strapi.svg';
import svelte from './skills/svelte.svg';
import swift from './skills/swift.svg';
import tailwind from './skills/tailwind.svg';
import tensorflow from './skills/tensorflow.svg';
import typescript from './skills/typescript.svg';
import unity from './skills/unity.svg';
import vitejs from './skills/vitejs.svg';
import vue from './skills/vue.svg';
import vuetifyjs from './skills/vuetifyjs.svg';
import webix from './skills/webix.svg';
import wolframalpha from './skills/wolframalpha.svg';
import wordpress from './skills/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'linux':
        return 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg'
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    default:
      break;
  }
}
