// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * @module core/animpack
 */

import {
  Linear,
  Quadratic,
  Cubic,
  Quartic,
  Quintic,
  Sinusoidal,
  Exponential,
  Circular,
  Elastic,
  Back,
  Bounce,
} from './Easing';
import AnimationFeature, {AnimationTypes} from './AnimationFeature';
import AnimationLayer, {
  LayerBlendModes,
  DefaultLayerBlendMode,
} from './AnimationLayer';
import SingleState from './state/SingleState';
import TransitionState from './state/TransitionState';
import FreeBlendState from './state/FreeBlendState';
import AnimationUtils from './AnimationUtils';

/**
 * @namespace
 */
const Easing = {
  /**
   * @see Linear
   */
  Linear,
  /**
   * @see Quadratic
   */
  Quadratic,
  /**
   * @see Cubic
   */
  Cubic,
  /**
   * @see Quartic
   */
  Quartic,
  /**
   * @see Quintic
   */
  Quintic,
  /**
   * @see Sinusoidal
   */
  Sinusoidal,
  /**
   * @see Exponential
   */
  Exponential,
  /**
   * @see Circular
   */
  Circular,
  /**
   * @see Elastic
   */
  Elastic,
  /**
   * @see Back
   */
  Back,
  /**
   * @see Bounce
   */
  Bounce,
};
export default {
  /**
   * @see core/AnimationFeature
   */
  AnimationFeature,
  /**
   * @see AnimationLayer
   */
  AnimationLayer,
  /**
   * @see core/SingleState
   */
  SingleState,
  /**
   * @see TransitionState
   */
  TransitionState,
  /**
   * @see FreeBlendState
   */
  FreeBlendState,
  /**
   * @see AnimationUtils
   */
  AnimationUtils,

  Easing,
  /**
   * @see LayerBlendModes
   */
  LayerBlendModes,
  /**
   * @see DefaultLayerBlendMode
   */
  DefaultLayerBlendMode,
  /**
   * @see AnimationTypes
   */
  AnimationTypes,
};
