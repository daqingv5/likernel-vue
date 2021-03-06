<template>
  <component
    v-if="noWrapper"
    ref="input"
    :is="whatTagIsThis"
    :id="id"
    :class="inputClasses"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :name="name"
    :required="required"
    :checked="inputChecked"
    :value="innerValue"
    :rows="rows"
    :maxlength="maxlength"
    :aria-label="label || ariaLabel || placeholder"
    :aria-describedby="ariaDescribedBy"
    :aria-labelledby="ariaLabelledBy"
    @focus="focus"
    @blur="blur"
    @click="wave"
    @change="onChange"
    @input="onInput"
  >{{whatTagIsThis==='textarea' && value}}</component>
  <div :class="wrapperClasses" v-else>
    <i v-if="icon" :class="iconClasses"/>
    <div class="input-group-prepend" v-if="$slots.prepend" :id="prependSlotID">
      <slot name="prepend"></slot>
    </div>
    <component
      ref="input"
      :is="whatTagIsThis"
      :id="id"
      :class="inputClasses"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      :required="required"
      :checked="inputChecked"
      :value="innerValue"
      :rows="rows"
      :maxlength="maxlength"
      :aria-label="label || ariaLabel || placeholder"
      :aria-describedby="ariaDescribedBy"
      :aria-labelledby="ariaLabelledBy"
      @focus="focus"
      @blur="blur"
      @click="wave"
      @change="onChange"
      @input="onInput"
    >{{whatTagIsThis==='textarea' && value}}</component>
    <label v-if="label" :class="labelClasses" @click="focus" ref="label" :for="id">{{label}}</label>
    <label v-if="isThisCheckboxLabeless" :class="labelClasses" @click="focus" ref="label" :for="id"/>
    <slot></slot>
    <div class="input-group-append" v-if="$slots.append" :id="appendSlotID">
      <slot name="append"></slot>
    </div>
    <div v-if="validFeedback" class="valid-feedback">
      {{validFeedback}}
    </div>
    <div v-if="invalidFeedback" class="invalid-feedback">
      {{invalidFeedback}}
    </div>
    <small v-if="small" class="form-text text-muted">{{small}}</small>
  </div>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';
import mdbClassMixin from '../mixins/mdbClassMixin';

const Input = {
  props: {
    basic: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "input"
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String
    },
    label: {
      type: String
    },
    filled: {
      type: Boolean
    },
    icon: {
      type: String,
    },
    placeholder: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    navInput: {
      type: Boolean,
      default: false
    },
    gap: {
      type: Boolean,
      default: false
    },
    waves: {
      type: Boolean,
      default: false
    },
    wavesFixed: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    labelColor: {
      type: String
    },
    iconClass: {
      type: String
    },
    inline: {
      type: Boolean
    },
    successMsg: {
      type: String
    },
    errorMsg: {
      type: String
    },
    validation: {
      type: Boolean
    },
    customValidation: {
      type: Boolean
    },
    isValid: {
      type: Boolean
    },
    active: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: [Array, String]
    },
    far: {
      type: Boolean,
      default: false
    },
    regular: {
      type: Boolean,
      default: false
    },
    fal: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    brands: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number
    },
    wrapperClass: {
      type: [String, Array]
    },
    noWrapper: {
      type: Boolean,
      value: false
    },
    ariaLabel: {
      type: String
    },
    ariaDescribedBy: {
      type: String
    },
    ariaLabelledBy: {
      type: String
    },
    prependSlotID: {
      type: String
    },
    appendSlotID: {
      type: String
    },
    inputClass: {
      type: String
    },
    maxlength: {
      type: [String, Number]
    },
    outline: {
      type: Boolean,
      default: false
    },
    validFeedback: {
      type: [String, Boolean],
      default: false
    },
    invalidFeedback: {
      type: [String, Boolean],
      default: false
    },
    small: {
      type: String
    },
    bg: {
      type: Boolean
    },
    radioValue: {
      type: String
    }
  },
  data() {
    return {
      innerValue: this.value,
      innerChecked: this.checked,
      isTouched: this.active
    };
  },
  mounted() {
    if (this.type === "checkbox" || this.type === "radio") {
      this.$emit('getDefaultValue', this.inputChecked);
    } else {
      this.$emit('getDefaultValue', this.innerValue);
    }
  },
  computed: {
    inputChecked() {
      if (this.type === "checkbox") {
        if (this.value === true || this.innerChecked === true) {
          return true;
        }
        return false;
      }
      if (this.type === "radio") {
        if (this.value === this.radioValue || this.innerChecked) {
          return true;
        }
        return false;
      }
      return this.value;
    },
    inputClasses() {
      return classNames(
        'form-control',
        this.validation ? this.isValid ? 'is-valid' : 'is-invalid' : false,
        this.customValidation ? this.isValid ? 'is-valid' : 'is-invalid' : false,
        this.size && 'form-control-' + this.size,
        {
          'filled-in': this.filled,
          'with-gap': this.gap
        },
        this.type === 'checkbox' ? this.gap ? false : 'form-check-input' : false,
        this.type === 'radio' ? 'form-check-input' : false,
        this.type === 'textarea' && !this.basic ? 'md-textarea' : false,
        this.inputClass && this.inputClass
      );
    },
    wrapperClasses() {
      return classNames(
        (this.type === 'checkbox' || this.type === 'radio') && this.inline ?
          'form-check' : (this.type === 'checkbox' || this.type === 'radio') ? 'form-check' : false,
        this.basic || this.type === 'checkbox' || this.type === 'radio' ? false : 'md-form',
        this.outline && 'md-outline',
        this.bg && 'md-bg',
        this.waves && 'ripple-parent',
        this.doesItGetTheGroupClass && this.size ? `input-group input-group-${this.size}` :
          this.doesItGetTheGroupClass && !this.size ? 'input-group' :
            !this.doesItGetTheGroupClass && this.size ? `form-${this.size}` : false,
        this.wrapperClass,
        this.mdbClass
      );
    },
    iconClasses(){
      return classNames(
        this.far || this.regular ? 'far' :
          this.fal || this.light ? 'fal' :
            this.fab || this.brands ? 'fab' : 'fas',
        'prefix fa-' + this.icon,
        this.isTouched && 'active',
        this.iconClass
      );
    },
    labelClasses() {
      return classNames(
        {
          'active': (this.placeholder || this.isTouched || this.innerValue !=='') && this.type!=='checkbox' && this.type!=='radio',
          'disabled': this.disabled,
          'form-check-label': (this.type === 'checkbox' || this.type === 'radio'),
          'mr-5': !this.isThisCheckboxLabeless
        },
        this.labelColor && 'text-' + this.labelColor,
        this.labelClass
      );
    },
    // tagname helper
    whatTagIsThis() {
      if (this.type==='textarea') {
        return 'textarea';
      }
      return this.tag;
    },
    // classname helper
    doesItGetTheGroupClass() {
      return (this.$slots.prepend || this.$slots.append) || (this.basic && this.type==='textarea');
    },
    // checkbox with no label (say, has to fit vertically & horizontally) helper
    isThisCheckboxLabeless() {
      return this.type==='checkbox' && typeof this.label==="undefined";
    }
  },
  methods: {
    focus(e) {
      this.isTouched = true;
      if (!this.disabled) {
        this.$refs.input.focus();
      }
      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = "transparent";
        this.$el.firstElementChild.style.boxShadow = "none";
      }
    },
    blur(e) {
      this.isTouched = false;
      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = "#fff";
      }
    },
    onChange(e) {
      if (this.type === "checkbox") {
        this.$emit('change', e.target.checked);
        this.$emit('input', e.target.checked);
        this.innerChecked = e.target.checked;
      } else if (this.type === "radio") {
        this.innerChecked = e.target.checked;
        if (this.radioValue) {
          this.$emit('input', this.radioValue);
        }
      }
      else {
        this.$emit('change', e.target.value);
      }
    },
    onInput(e) {
      if (this.type !== "checkbox") {
        this.$emit('input', e.target.value);
        this.innerValue = e.target.value;
      }
    }
  },
  mixins: [waves, mdbClassMixin],
  watch: {
    value(val) {
      this.$refs.input.value = val;
      this.innerValue = val;
      this.$emit('change', this.innerValue);
    }
  }
};

export default Input;
export { Input as mdbInput };
</script>

<style scoped>
.navbar .md-form {
  margin-top: 0;
  margin-bottom: 0;
}

.form-dark input[type="checkbox"]:checked + label:before {
  top: -4px;
  left: -3px;
  width: 12px;
  height: 22px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent #00c851 #00c851 transparent;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%; }

.form-dark .font-small {
  font-size: 0.8rem; }

.form-dark input[type=email]:focus:not([readonly]) + label {
  color: #fff; }

.form-dark input[type="checkbox"] + label:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
  z-index: 0;
  border: 1.5px solid #fff;
  border-radius: 1px;
  margin-top: 2px;
  -webkit-transition: 0.2s;
  transition: 0.2s; }

.form-dark input[type="checkbox"]:checked + label:before {
  top: -4px;
  left: -3px;
  width: 12px;
  height: 22px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent #00c851 #00c851 transparent;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%; }

.form-dark input[type=password]:focus:not([readonly]) {
  border-bottom: 1px solid #00C851;
  -webkit-box-shadow: 0 1px 0 0 #00C851;
  box-shadow: 0 1px 0 0 #00C851; }


.form-dark input[type=email]:focus:not([readonly]) {
  border-bottom: 1px solid #00C851;
  -webkit-box-shadow: 0 1px 0 0 #00C851;
  box-shadow: 0 1px 0 0 #00C851; }


.form-dark [type="checkbox"] + label:before {
  top: 2px;
  width: 15px;
  height: 15px;
}

.md-form textarea~label.active{
	color: inherit;
}

.form-control.is-valid {
  border-color: #28a745;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center right calc(0.375em + 0.1875rem);
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.form-control.is-invalid {
  border-color: #dc3545;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
  background-repeat: no-repeat;
  background-position: center right calc(0.375em + 0.1875rem);
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

</style>
